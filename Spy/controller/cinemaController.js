const Cinema = require("../models/cinemaModel");
const factory = require("./handlerFactory");

exports.getLetter = factory.getOne(Cinema);