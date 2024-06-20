const express = require("express");

const fun = require("../controller/funLetterController");


const router = express.Router();
router.route("/fun").get(fun.getLetter);

module.exports = router;