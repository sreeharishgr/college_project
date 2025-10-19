const express = require('express');
const upload = require('../middleware/upload');
const { signup, login,logout,alreadyLoggedIn } = require('../controllers/authController');
const{ authMiddleware }=require('../middleware/auth')

const router = express.Router();

router.post('/sign-up', upload.single('aadhar_file'), signup);
router.post('/login', login);
router.post('/log-out',authMiddleware, logout);
router.post('/already-logged-in', authMiddleware, alreadyLoggedIn);

module.exports = router;
