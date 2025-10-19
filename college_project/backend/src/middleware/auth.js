const jwt = require('jsonwebtoken');
const { Account } = require('../models/associations.js');

const JWT_SECRET = process.env.JWT_SECRET;

exports.authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer '))
      return res.status(401).json({ message: 'Authorization header missing' });

    
    const token = authHeader.split(' ')[1];
    // check the token validity time
    if (!token) return res.status(401).json({ message: 'Token missing' });

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
  
    const user = await Account.findByPk(decoded.id);
    if (!user) return res.status(401).json({ message: 'User not found' });


    req.user = user;
    next();
  } catch (err) {
    // Token expired
    if (err.name === "TokenExpiredError") {
      // Decode token without verifying expiration to get user ID
      const decoded = jwt.decode(err.token); // decode returns payload
      if (decoded?.id) {
        // Update user status to false
        await Account.update(
      { status: false },
      { where: { account_id: dataValues.account_id } }
    );
        console.log(`User ID ${decoded.id} status set to false due to expired token`);
      }

      return res.status(401).json({
        message: "Your session has expired. Please login again.",
        logged: false,
        expired: true,
      });
    }

    // Invalid token
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({
        message: "Invalid token. Please login again.",
        logged: false,
      });
    }

    console.error("JWT Middleware Error:", err.message);
    return res
      .status(401)
      .json({ message: "Authentication failed", logged: false });
  }
};

exports.authorizeRoles = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role))
    return res.status(403).json({ message: 'Forbidden: Access denied' });
  next();
};
