const Things = require("../models/thingsModel");
const factory = require("./handlerFactory");

exports.getLetter = factory.getOne(Things);