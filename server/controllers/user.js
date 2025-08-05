const {PrismaClient} = require("../generated/prisma");
const bcrypt = require("bcrypt");
const HttpError = require("../models/error");
const {
    sendVerificationcode,
    sendDemandCode,
    sendResetUrl,
} = require("../mails/sendMail");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const prisma = new PrismaClient();

const createUser = async (req, res, next) => {
    try {
        const {name, email, password, password2, matricule, role} = req.body;

        if (!name || !email || !password || !role || !matricule) {
            return next(new HttpError("Vous devez remplir tout les champs", 422));
        }

        const existingUser = await prisma.user.findFirst({
            where: {OR: [{email}, {matricule}]},
        });
        if (existingUser) {
            return next(new HttpError("Email ou matricule déjà utilisé", 422));
        }

        if (password !== password2) {
            return next(new HttpError("Les mots de passe ne correspondent pas", 400));
        }

        const hashedPass = await bcrypt.hash(password, 10);
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        const expiration = new Date(Date.now() + 10 * 60000);

        // 1. Create user
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPass,
                role,
                verificationCode: code,
                verificationExpiration: expiration,
                matricule,
            },
        });

        // 2. Create default leave balances
        const currentYear = new Date().getFullYear();

        const defaultBalances = [
            {type: "ANNUAL", total: 20},
            {type: "SICK", total: 10},
            {type: "MATERNITY", total: 90},
            {type: "PATERNITY", total: 10},
            {type: "UNPAID", total: 30},
        ];

        const balanceData = defaultBalances.map((b) => ({
            userId: user.id,
            type: b.type,
            year: currentYear,
            total: b.total,
        }));

        await prisma.leaveBalance.createMany({data: balanceData});

        // 3. Send verification code
        await sendVerificationcode(user.email, user.verificationCode, user.name);

        res.status(201).json({
            user,
            message: `Code de vérification envoyé à ${user.email}`,
        });
    } catch (error) {
        console.error("Erreur lors de l'ajout de l'agent", error);
        return next(new HttpError("Erreur lors de l'ajout de l'agent", 500));
    }
};

const verifyEmail = async (req, res, next) => {
    try {
        const {code} = req.body;

        if (!code) {
            return next(new HttpError("Le code est requis", 400));
        }

        const user = await prisma.user.findFirst({
            where: {verificationCode: code},
        });

        if (!user) {
            return next(new HttpError("Code de vérification invalide.", 400));
        }

        const now = new Date();

        if (user.verificationExpiration < now) {
            return res.status(400).json({
                error: "expired",
                email: user.email,
                message: "Le code de vérification a expiré.",
            });
        }

        const updatedUser = await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                isVerified: true,
                verificationCode: "",
                verificationExpiration: null,
            },
        });

        const {password, matricule, ...safeUser} = updatedUser;

        return res
            .status(200)
            .json({message: "Email vérifié avec succès.", user: safeUser});
    } catch (error) {
        console.error("Erreur lors de la vérification de l'email :", error);
        return res
            .status(500)
            .json({message: "Erreur serveur lors de la vérification de l'email."});
    }
};

const requestNewVerificationCode = async (req, res, next) => {
    try {
        const {email} = req.body;
        if (!email) {
            return next(new HttpError("L'email est requis.", 422));
        }

        const user = await prisma.user.findUnique({
            where: {email},
        });

        if (!user) {
            return next(new HttpError("Utilisateur introuvable.", 404));
        }

        const newCode = Math.floor(100000 + Math.random() * 900000).toString();
        const newExpiration = new Date(Date.now() + 10 * 60 * 1000);

        console.log("Code généré:", newCode);

        await prisma.user.update({
            where: {id: user.id},
            data: {
                verificationCode: newCode,
                verificationExpiration: newExpiration,
            },
        });

        // Confirm saved value
        const savedUser = await prisma.user.findUnique({
            where: {id: user.id},
        });
        console.log("Code enregistré dans la base:", savedUser.verificationCode);

        await sendDemandCode(user.email, newCode, user.name);

        return res.status(200).json({
            message: "Nouveau code de vérification généré avec succès.",
        });
    } catch (error) {
        console.error("Erreur lors de l'envoie du nouveau code :", error);
        return res
            .status(500)
            .json({message: "Erreur lors de l'envoie du nouveau code"});
    }
};

const loginUser = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const newEmail = email.toLowerCase();

        const user = await prisma.user.findFirst({
            where: {email: newEmail},
        });

        if (!user) {
            return next(new HttpError("Utilisateur non trouvé", 404));
        }

        const comparePass = await bcrypt.compare(password, user.password);
        if (!comparePass) {
            return next(new HttpError("Mot de passe incorrect", 400));
        }

        if (!user.isVerified) {
            return res.status(400).json({
                error: "not-verified",
            });
        }

        // ✅ Update lastLogin
        await prisma.user.update({
            where: {id: user.id},
            data: {lastLogin: new Date()},
        });

        const {id, name, role} = user;
        const token = jwt.sign({id, name, role}, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        res.status(200).json({
            user: {
                id,
                name,
                email,
                role,
                token,
            },
        });
    } catch (error) {
        console.error("Erreur de connexion :", error);
        return res.status(500).json({
            message: "Erreur de connexion, vérifiez votre connexion internet",
        });
    }
};

const forgotPassword = async (req, res, next) => {
    try {
        const {email} = req.body;
        const user = await prisma.user.findFirst({
            where: {email},
        });

        if (!user) {
            return next(new HttpError(`aucun compte liee a ${email}`, 404));
        }

        const token = crypto.randomBytes(20).toString("hex");
        const expiration = new Date(Date.now() + 10 * 60000); // after 10 minutes

        await prisma.user.update({
            where: {id: user.id},
            data: {
                resetRoken: token,
                resetTokenExipiratioin: expiration,
            },
        });

        const resetUrl = `${process.env.CLIENT_URL}/reset-password/${token}`;

        await sendResetUrl(user.email, resetUrl, user.name);

        res.status(200).json({
            message: `Lien envoyer au ${email}`,
        });
    } catch (error) {
        console.error("Erreur lors de l'envoie du nouveau code :", error);
        return res
            .status(500)
            .json({message: "Erreur lors de l'envoie du nouveau code"});
    }
};

const resetPassword = async (req, res, next) => {
    try {
        const {password, password2} = req.body;
        const {token} = req.params;

        const user = await prisma.user.findFirst({
            where: {resetRoken: token},
        });

        if (!user) {
            return next(new HttpError("Token invalide.", 400));
        }

        const now = new Date();

        if (user.resetTokenExipiratioin < now) {
            return res.status(400).json({
                error: "expired",
                email: user.email,
                message: "Le token de modification a expiré.",
            });
        }

        if (password != password2) {
            return next(new HttpError("Les mots de passe ne correspondent pas", 400));
        }

        const hashedPass = await bcrypt.hash(password, 10);

        await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                resetRoken: null,
                password: hashedPass,
                resetTokenExipiratioin: null,
            },
        });

        return res
            .status(200)
            .json({message: "Mot de passe modifier avec succès."});
    } catch (error) {
        console.error("Erreur lors de la modification du mot de passe :", error);
        return res.status(500).json({
            message:
                "Erreur lors de la modification du mot de passe, Reesayer plus tard",
        });
    }
};

const updateUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {name, email, matricule, role, password} = req.body;

        // Check if the user exists
        const user = await prisma.user.findUnique({where: {id: parseInt(id)}});
        if (!user) {
            return next(new HttpError("Utilisateur non trouvé", 404));
        }

        // Build dynamic update object
        const dataToUpdate = {};

        if (name) dataToUpdate.name = name;
        if (email) dataToUpdate.email = email;
        if (matricule) dataToUpdate.matricule = matricule;
        if (role) dataToUpdate.role = role;
        if (password) dataToUpdate.password = await bcrypt.hash(password, 10); // hash new password

        const updatedUser = await prisma.user.update({
            where: {id: parseInt(id)},
            data: dataToUpdate,
        });

        const {
            password: _,
            resetRoken,
            resetTokenExipiratioin,
            verificationCode,
            vericationExpiration,
            ...safeUser
        } = updatedUser;

        return res.status(200).json({
            message: "Utilisateur mis à jour avec succès.",
            user: safeUser,
        });
    } catch (error) {
        console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
        return res.status(500).json({
            message: "Erreur lors de la mise à jour de l'utilisateur.",
        });
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const users = await prisma.user.findMany({
            orderBy: {createdAt: "desc"},
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                matricule: true,
                isVerified: true,
                createdAt: true,
                lastLogin: true,
                leaves: true,
            },
        });

        return res.status(200).json({users});
    } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
        return res
            .status(500)
            .json({message: "Erreur lors de la récupération des utilisateurs."});
    }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("User id:", id);

    if (!id) {
      return next(new HttpError("ID utilisateur manquant", 400));
    }

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return next(new HttpError("Utilisateur non trouvé", 404));
    }

    // Step 1: Delete LeaveHistory records where the user is actor (byUserId) or related via leave
    const userLeaves = await prisma.leave.findMany({
      where: { userId: id },
      select: { id: true },
    });

    const leaveIds = userLeaves.map((leave) => leave.id);

    await prisma.leaveHistory.deleteMany({
      where: {
        OR: [
          { byUserId: id },
          { leaveId: { in: leaveIds } }
        ],
      },
    });

    // Step 2: Delete Leave records of the user
    await prisma.leave.deleteMany({
      where: {
        OR: [
          { userId: id },
          { reviewedBy: id },
        ],
      },
    });

    // Step 3: Delete LeaveBalance records
    await prisma.leaveBalance.deleteMany({
      where: { userId: id },
    });

    // Step 4: Delete the user
    await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({ message: "Utilisateur et ses données associées supprimés avec succès." });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'utilisateur :", error);
    next(
      new HttpError(
        "Erreur serveur lors de la suppression de l'utilisateur",
        500
      )
    );
  }
};



module.exports = {
    createUser,
    verifyEmail,
    requestNewVerificationCode,
    loginUser,
    forgotPassword,
    resetPassword,
    updateUser,
    getAllUsers,
    deleteUser,
};
