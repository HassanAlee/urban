const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
  const token = req?.cookies?.access_token;
  if (!token) {
    return res.status(400).json({ message: "Unauthorized to access no token" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(400).json({ message: "Unauthorized to access" });
    }
    req.uId = user.id;
    next();
  });
};
module.exports = verifyToken;
