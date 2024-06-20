const express = require("express");
const fruit = require("../controller/fruiteController");


const router = express.Router();
router.route("/fruit").get(fruit.getLetter);

module.exports = router;