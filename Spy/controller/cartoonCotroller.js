const Cartoon = require("../models/cartoonModel");
const factory = require("./handlerFactory");

exports.getLetter = factory.getOne(Cartoon)