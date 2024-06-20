const History = require("../models/historyModel");
const factory = require("./handlerFactory");

exports.getLetter = factory.getOne(History);