const express = require('express');
const router = express.Router();

const { getAllCategories } = require('../controllers/categoryController');

router.get('/getAllCategories', getAllCategories);
module.exports = router;