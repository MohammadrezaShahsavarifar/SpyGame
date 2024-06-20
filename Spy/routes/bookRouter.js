const express = require("express");
const bookController = require("../controller/bookController");





const router = express.Router();

router.route("/book").get(bookController.getLetter);



module.exports = router;