const express = require("express");

const game = require("../controller/gameController");


const router = express.Router();
router.route("/game").get(game.getLetter);

module.exports = router;