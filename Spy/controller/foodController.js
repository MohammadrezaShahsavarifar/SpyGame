const Food = require("../models/foodModel");
const factory = require("./handlerFactory");

exports.getLetter = factory.getOne(Food);