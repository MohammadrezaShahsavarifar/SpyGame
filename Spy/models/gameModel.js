const mongoose = require("mongoose")


const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "مقدار ورودی نمیتواند خالی باشد"],
        maxlength: [40, "مقدار ورودی نباید از 40 کاراکتر بیشتر باشد"],
        minLength: [3, "مقدار ورودی نباید از 3 کاراکتر کمتر باشد"]
    }
})



const Game = mongoose.model("Game", gameSchema);

module.exports = Game;