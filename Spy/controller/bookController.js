const factory = require("./handlerFactory");
const Book = require("../models/bookModel");


exports.getLetter = factory.getOne(Book);