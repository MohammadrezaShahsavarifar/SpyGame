const express = require("express");
const countryLetterController = require("../controller/countryLetterController");





const router = express.Router();

router.route("/country").get(countryLetterController.getLetter);



module.exports = router;