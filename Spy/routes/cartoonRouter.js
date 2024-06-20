const express = require("express");

const cartoon = require("../controller/cartoonCotroller");


const router = express.Router();
router.route("/cartoon").get(cartoon.getLetter);

module.exports = router;