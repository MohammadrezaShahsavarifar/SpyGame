const express = require("express");

const things = require("../controller/thingsController");


const router = express.Router();
router.route("/things").get(things.getLetter);

module.exports = router;