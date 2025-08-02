const { PrismaClient } = require("../generated/prisma");
const {
  sendMessagetoUser,
  sendRejectedLeaveToUser,
  sendLeaveToAdmins,
} = require("../mails/sendMail");
const HttpError = require("../models/error");

const prisma = new PrismaClient();

const createLeave = async (req, res, next) => {
  try {
    const { type, startDate, endDate, reason, duration, documentUrl } =
      req.body;
    const userId = req.params.id;
    console.log("Recieved Data:", req.body);

    if (!type || !startDate || !endDate || !reason || !duration) {
      return next(
        new HttpError("Tous les champs obligatoires ne sont pas remplis.", 422)
      );
    }

    const currentYear = new Date().getFullYear();

    // Step 1: Get the user's leave balance for this type and year
    const balance = await prisma.leaveBalance.findFirst({
      where: {
        userId,
        type,
        year: currentYear,
      },
    });

    if (!balance) {
      return next(
        new HttpError(
          `Aucun solde de congé disponible pour ${type} en ${currentYear}.`,
          404
        )
      );
    }

    const remaining = balance.total - balance.used;
    if (duration > remaining) {
      return next(
        new HttpError(
          `Solde insuffisant: ${remaining} jour(s) restant(s) pour ce type de congé.`,
          400
        )
      );
    }

    // Step 2: Create the leave
    const leave = await prisma.leave.create({
      data: {
        type,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        reason,
        duration,
        documentUrl,
        userId,
        history: {
          create: {
            action: "CREATED",
            byUserId: userId,
          },
        },
      },
      include: {
        user: true,
      },
    });

    // Step 3: Get all admins
    const admins = await prisma.user.findMany({
      where: {
        role: "ADMIN",
      },
    });

    for (const admin of admins) {
      await sendLeaveToAdmins(admin.email, leave.user, leave);
    }

    res.status(201).json(leave);
  } catch (error) {
    next(error);
  }
};

const getAllLeaves = async (req, res, next) => {
  try {
    const leaves = await prisma.leave.findMany({
      include: {
        user: true,
        reviewer: true,
        history: true,
      },
    });
    res.json({ leaves });
  } catch (error) {
    next(error);
  }
};

const getLeaveById = async (req, res, next) => {
  try {
    const leaveId = req.params.id;
    const leave = await prisma.leave.findUnique({
      where: { id: leaveId },
      include: { user: true, reviewer: true, history: true },
    });

    if (!leave) return next(new HttpError("Demande introuvable.", 404));

    res.json(leave);
  } catch (error) {
    next(error);
  }
};

const getLeavesByUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;

    const leaves = await prisma.leave.findMany({
      where: { userId },
      include: { history: true },
    });

    res.json({ leaves });
  } catch (error) {
    next(error);
  }
};

const getLeavesByDate = async (req, res, next) => {
  try {
    const { start, end } = req.query;
    if (!start || !end) {
      return next(new HttpError("Veuillez spécifier les dates.", 400));
    }

    const leaves = await prisma.leave.findMany({
      where: {
        startDate: {
          gte: new Date(start),
        },
        endDate: {
          lte: new Date(end),
        },
      },
      include: { user: true },
    });

    res.status(200).json(leaves);
  } catch (error) {
    console.error("Erreur récupération congés par date :", error);
    return next(
      new HttpError("Erreur lors de la récupération des congés.", 500)
    );
  }
};

const updateLeaveStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, reviewerId } = req.body;

    if (!status || !["APPROVED", "REJECTED", "CANCELLED"].includes(status)) {
      return next(new HttpError("Statut invalide.", 400));
    }

    const updated = await prisma.leave.update({
      where: { id: parseInt(id) },
      data: {
        status,
        reviewedBy: reviewerId,
      },
    });

    res.status(200).json({ message: "Statut mis à jour.", leave: updated });
  } catch (error) {
    console.error("Erreur mise à jour statut :", error);
    return next(new HttpError("Erreur lors de la mise à jour du congé.", 500));
  }
};

const updateLeave = async (req, res, next) => {
  try {
    const leaveId = req.params.id;
    const userId = req.user.id;
    const { type, startDate, endDate, reason, duration, documentUrl } =
      req.body;

    const leave = await prisma.leave.findUnique({ where: { id: leaveId } });
    if (!leave) return next(new HttpError("Demande introuvable.", 404));

    if (leave.status !== "PENDING") {
      return next(
        new HttpError(
          "Seules les demandes en attente peuvent être modifiées.",
          403
        )
      );
    }

    const updated = await prisma.leave.update({
      where: { id: leaveId },
      data: {
        type,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        reason,
        duration,
        documentUrl,
        updatedAt: new Date(),
        history: {
          create: {
            action: "UPDATED",
            byUserId: userId,
          },
        },
      },
    });

    res.json(updated);
  } catch (error) {
    next(error);
  }
};

const deleteLeave = async (req, res, next) => {
  try {
    const { id } = req.params;

    await prisma.leave.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: "Congé supprimé." });
  } catch (error) {
    console.error("Erreur suppression congé :", error);
    return next(new HttpError("Erreur lors de la suppression du congé.", 500));
  }
};

const acceptLeave = async (req, res, next) => {
  try {
    const leaveId = req.params.id;
    const reviewerId = req.user.id;

    const reviewer = await prisma.user.findUnique({
      where: { id: reviewerId },
    });
    if (!reviewer) {
      return next(
        new HttpError("L'utilisateur relecteur est introuvable.", 404)
      );
    }

    const leave = await prisma.leave.findUnique({
      where: { id: leaveId },
      include: {
        user: true,
      },
    });

    if (!leave) return next(new HttpError("Demande introuvable.", 404));
    if (leave.status !== "PENDING")
      return next(
        new HttpError(
          "Seules les demandes en attente peuvent être approuvées.",
          400
        )
      );

    const currentYear = new Date().getFullYear();

    // Find balance
    const balance = await prisma.leaveBalance.findFirst({
      where: {
        userId: leave.userId,
        type: leave.type,
        year: currentYear,
      },
    });

    if (!balance) {
      return next(
        new HttpError(
          `Aucun solde disponible pour ${leave.type} en ${currentYear}.`,
          404
        )
      );
    }

    const remaining = balance.total - balance.used;
    if (leave.duration > remaining) {
      return next(
        new HttpError(
          `Impossible d'approuver : solde insuffisant. Il reste ${remaining} jour(s).`,
          400
        )
      );
    }

    // Approve the leave
    const updatedLeave = await prisma.leave.update({
      where: { id: leaveId },
      data: {
        status: "APPROVED",
        reviewedBy: reviewerId,
        history: {
          create: {
            action: "APPROVED",
            byUserId: reviewerId,
          },
        },
      },
    });

    // Update used days in balance
    await prisma.leaveBalance.update({
      where: { id: balance.id },
      data: {
        used: { increment: leave.duration },
      },
    });

    const { name, email } = leave.user;
    await sendMessagetoUser(name, email, leave.startDate, leave.endDate);

    res.json(updatedLeave);
  } catch (error) {
    next(error);
  }
};

const rejectLeave = async (req, res, next) => {
  try {
    const leaveId = req.params.id;
    const reviewerId = req.user.id;
    const { comment } = req.body;

    const leave = await prisma.leave.findUnique({
      where: { id: leaveId },
      include: {
        user: true,
      },
    });

    if (!leave) return next(new HttpError("Demande introuvable.", 404));
    if (leave.status !== "PENDING") {
      return next(
        new HttpError(
          "Seules les demandes en attente peuvent être rejetées.",
          400
        )
      );
    }

    const updated = await prisma.leave.update({
      where: { id: leaveId },
      data: {
        status: "REJECTED",
        reviewedBy: reviewerId,
        comment,
        history: {
          create: {
            action: "REJECTED",
            byUserId: reviewerId,
            note: comment,
          },
        },
      },
    });

    // ✉️ Envoi d'email à l'utilisateur
    const { name, email } = leave.user;
    await sendRejectedLeaveToUser(
      name,
      email,
      leave.startDate,
      leave.endDate,
      comment
    );

    res.json(updated);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createLeave,
  getAllLeaves,
  getLeaveById,
  getLeavesByUser,
  getLeavesByDate,
  updateLeaveStatus,
  deleteLeave,
  acceptLeave,
  rejectLeave,
  updateLeave,
};
