const jwt = require("jsonwebtoken");
const HttpError = require("../models/error");

const verifyToken = async (req, res, next) => {
  const Authorization = req.headers.Authorization || req.headers.authorization;

  if (Authorization && Authorization.startsWith("Bearer")) {
    const token = Authorization.split(" ")[1]; // ✅ Séparer par espace
    jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
      if (err) {
        console.log(err);
        return next(new HttpError("Unauthorized, Invalid token", 403));
      }
      req.user = info;
      next();
    });
  } else {
    return next(new HttpError("Unauthorized. no token", 402));
  }
};

module.exports = verifyToken;
