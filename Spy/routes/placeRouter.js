const express = require("express");

const place = require("../controller/placeController");


const router = express.Router();
router.route("/place").get(place.getLetter);

module.exports = router;