const transporter = require("../config/mails");

const sendVerificationcode = async (email, code, name) => {
  const htmlContent = `
    <h3>Vérification de compte</h3>
    <p>Bonjour ${name},</p>
    <p>Votre code de vérification est : <strong>${code}</strong></p>
    <p>Merci de l'utiliser pour activer votre compte.</p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Vérification du Compte",
      html: htmlContent,
    });
    console.log(`Verification code sent to ${email}`);
  } catch (error) {
    console.log("Error sending the verification code", error);
  }
};

const sendAminLeaveExpires = async (
  adminName,
  userName,
  mat,
  endDate,
  email
) => {
  const htmlContent = `<p>Bonjour ${adminName},</p>
        <p>Le congé de <strong>${userName}</strong> (matricule ${mat}) se termine aujourd'hui (${endDate.toDateString()}).</p>
        <p>Merci de vous assurer de sa reprise de travail demain.</p>`;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Fin de conge",
      html: htmlContent,
    }),
      console.log(`End leave email sent to ${email}`);
  } catch (error) {}
};

const sendUserLeaveExpires = async (userName, endDate, email) => {
  const htmlContent = `<p>Bonjour ${userName},</p>
      <p>Votre congé se termine aujourd'hui (${endDate.toDateString()}). Merci de reprendre le travail dès demain.</p>
      <p>Cordialement,</p>`;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Fin de conge",
      html: htmlContent,
    }),
      console.log(`End leave email sent to ${email} `);
  } catch (error) {}
};

const sendDemandCode = async (email, code, name) => {
  const htmlContent = `
    <h3>Code de connexion</h3>
    <p>Bonjour ${name},</p>
    <p>Votre code est : <strong>${code}</strong></p>
    <p>Utilisez ce code pour accéder à votre espace personnel.</p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Code de Connexion",
      html: htmlContent,
    });
    console.log(`Login code sent to ${email}`);
  } catch (error) {
    console.log("Error sending login code", error);
  }
};

const sendResetUrl = async (email, resetUrl, name) => {
  const htmlContent = `
    <h3>Réinitialisation du mot de passe</h3>
    <p>Bonjour ${name},</p>
    <p>Cliquez sur le lien suivant pour réinitialiser votre mot de passe :</p>
    <p><a href="${resetUrl}">${resetUrl}</a></p>
    <p>Ce lien expirera bientôt pour des raisons de sécurité.</p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Modification de mot de passe",
      html: htmlContent,
    });
    console.log(`Reset password link sent to: ${email}`);
  } catch (error) {
    console.log("Error sending reset password link", error);
  }
};

const LEAVE_REQUEST_TEMPLATE = (user, leave) => `
  <h3>Nouvelle demande de congé</h3>
  <p><strong>Employé :</strong> ${user.name} (${user.email})</p>
  <p><strong>Type :</strong> ${leave.type}</p>
  <p><strong>Dates :</strong> du ${new Date(leave.startDate).toLocaleDateString(
    "fr-FR"
  )} au ${new Date(leave.endDate).toLocaleDateString("fr-FR")}</p>
  <p><strong>Raison :</strong> ${leave.reason}</p>
`;

const sendLeaveToAdmins = async (emails, user, leave) => {
  const htmlContent = LEAVE_REQUEST_TEMPLATE(user, leave);

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: emails, // array or comma-separated string
      subject: "Nouvelle demande de congé",
      html: htmlContent,
    });
    console.log("Message envoyé à tous les admins :", emails);
  } catch (error) {
    console.error("Erreur lors de l'envoi du mail aux admins", error);
  }
};

const sendMessagetoUser = async (name, email, start, end) => {
  const startFormatted = new Date(start).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const endFormatted = new Date(end).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const htmlContent = `
    <h3>Congé approuvé</h3>
    <p>Bonjour ${name},</p>
    <p>Votre demande de congé du <strong>${startFormatted}</strong> au <strong>${endFormatted}</strong> a été <strong>approuvée</strong>.</p>
    <p>Profitez bien de votre repos !</p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Congé approuvé",
      html: htmlContent,
    });
    console.log(`Leave approved email sent to ${email}`);
  } catch (error) {
    console.log("Error sending leave approved email:", error);
  }
};

const sendRejectedLeaveToUser = async (name, email, start, end, comment) => {
  const startFormatted = new Date(start).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const endFormatted = new Date(end).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const htmlContent = `
    <h3>Demande de congé refusée</h3>
    <p>Bonjour ${name},</p>
    <p>Votre demande de congé du <strong>${startFormatted}</strong> au <strong>${endFormatted}</strong> a été <strong>refusée</strong>.</p>
    <p><strong>Commentaire :</strong> ${
      comment || "Aucun commentaire fourni."
    }</p>
    <p>Merci de contacter votre superviseur pour plus de détails.</p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Demande de congé refusée",
      html: htmlContent,
    });
    console.log(`Leave rejection email sent to ${email}`);
  } catch (error) {
    console.log("Error sending leave rejection email:", error);
  }
};

module.exports = {
  sendVerificationcode,
  sendDemandCode,
  sendResetUrl,
  sendLeaveToAdmins,
  sendMessagetoUser,
  sendRejectedLeaveToUser,
  sendAminLeaveExpires,
  sendUserLeaveExpires,
};
