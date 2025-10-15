const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

exports.generateToken = (account) => {
  return jwt.sign(
    { id: account.account_id, role: account.role, email: account.email },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
};

