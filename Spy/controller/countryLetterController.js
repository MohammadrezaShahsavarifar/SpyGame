const System = require("../models/countryLetter");
const factory = require("./handlerFactory");

exports.getLetter = factory.getOne(System)