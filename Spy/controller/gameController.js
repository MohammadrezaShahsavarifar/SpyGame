const Game = require("../models/gameModel");
const factory = require("./handlerFactory");

exports.getLetter = factory.getOne(Game);