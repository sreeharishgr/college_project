const express = require("express");
const router = express.Router();
const {
  getProviders,
  handleActiveStatus,
} = require("../controllers/providerController");
const authMiddleware = require("../middleware/auth"); // protect route

router.get("/getProviders", getProviders);
router.post("/handleActiveStatus", handleActiveStatus);

module.exports = router;
