const Place = require("../models/placeModel");
const factory = require("./handlerFactory");

exports.getLetter = factory.getOne(Place);