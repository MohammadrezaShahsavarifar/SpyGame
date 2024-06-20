const express = require("express");

const cinema = require("../controller/cinemaController");


const router = express.Router();
router.route("/cinema").get(cinema.getLetter);

module.exports = router;