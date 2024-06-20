const express = require("express");

const random = require("../controller/randomController");


const router = express.Router();
router.route("/random").get(random.getLetter);

module.exports = router;