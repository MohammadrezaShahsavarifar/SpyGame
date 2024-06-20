const Random = require("../models/randomModel");
const factory = require("./handlerFactory");

exports.getLetter = factory.getOne(Random);