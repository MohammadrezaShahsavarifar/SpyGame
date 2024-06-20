const express = require("express");

const history = require("../controller/historyController");


const router = express.Router();
router.route("/history").get(history.getLetter);

module.exports = router;