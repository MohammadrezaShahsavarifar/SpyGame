const Fun = require("../models/funLetter");
const factory = require("../controller/handlerFactory");

exports.getLetter = factory.getOne(Fun)