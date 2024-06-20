const express = require("express");
const letterController = require("../controller/letterController");




const router = express.Router();
router.route("/custom/:id").delete(letterController.deleteLetter)
router.route("/custom").post(letterController.createLetter).get(letterController.getLetter)


module.exports = router;