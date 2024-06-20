const Letter = require("../models/customLetter");
const factory = require("../controller/handlerFactory");



exports.createLetter = factory.createOne(Letter);
exports.deleteLetter = factory.deleteOne(Letter);
exports.getLetter = factory.getOne(Letter)