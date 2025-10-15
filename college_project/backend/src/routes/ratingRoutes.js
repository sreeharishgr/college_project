const express = require("express");
const router = express.Router();

const { submitRating,getAllRatingsPaginated } = require("../controllers/ratingControllers");
const authMiddleware = require("../middleware/auth");

router.post("/submitRating", submitRating);
router.get("/getAllRatings", getAllRatingsPaginated);
module.exports = router;