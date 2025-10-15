const express = require("express");
const router = express.Router();
const { getUnverifiedProviders, verifyProvider, getDashboardData } = require("../controllers/adminController"); 

router.get("/unverifiedProviders", getUnverifiedProviders);
router.post("/verifyProvider", verifyProvider);
router.get("/getDashboard", getDashboardData);

module.exports = router;