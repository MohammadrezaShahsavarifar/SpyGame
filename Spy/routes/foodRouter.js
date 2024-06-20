const express = require("express");

const food = require("../controller/foodController");


const router = express.Router();
router.route("/food").get(food.getLetter);

module.exports = router;