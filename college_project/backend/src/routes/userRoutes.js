const express = require("express");
const router = express.Router();
const { updatePassword } = require("../controllers/userController");

router.patch("/updatePassword", updatePassword);

module.exports = router;
