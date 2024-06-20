const Fruit = require("../models/fruitLetter");
const factory = require("./handlerFactory");

exports.getLetter = factory.getOne(Fruit);