const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const authMiddleware = async (req, res, next) => {
  const cookie = req.cookies?.token;
  if(!cookie) return res.redirect("/")
  const decode = jwt.verify(cookie, secret);
  const userEmail = decode.email;
  req.email = userEmail;
  next();
};

module.exports = authMiddleware;