const fs = require("fs")
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config({ path: "../config.env" });

const System = require("../models/customLetter");
const Book = require("../models/bookModel");
const Country = require("../models/countryLetter");
const Fruite = require("../models/fruitLetter");
const Fun = require("../models/funLetter");
const Cartoon = require("../models/cartoonModel");
const Cinema = require("../models/cinemaModel");
const Food = require("../models/foodModel");
const Game = require("../models/gameModel");
const History = require("../models/historyModel");
const Place = require("../models/placeModel");
const Random = require("../models/randomModel");
const Things = require("../models/thingsModel");

// const book = JSON.parse(fs.readFileSync(`${__dirname}/book.json`, "utf-8"));
// const cartoon = JSON.parse(fs.readFileSync(`${__dirname}/cartoon.json`, "utf-8"));
// const country = JSON.parse(fs.readFileSync(`${__dirname}/country.json`, "utf-8"));
const fruit = JSON.parse(fs.readFileSync(`${__dirname}/fruit.json`, "utf-8"));
// const fun = JSON.parse(fs.readFileSync(`${__dirname}/funLetter.json`, "utf-8"));
// const cinema = JSON.parse(fs.readFileSync(`${__dirname}/cinema.json`, "utf-8"));
// const food = JSON.parse(fs.readFileSync(`${__dirname}/food.json`, "utf-8"));
// const game = JSON.parse(fs.readFileSync(`${__dirname}/game.json`, "utf-8"));
// const history = JSON.parse(fs.readFileSync(`${__dirname}/history.json`, "utf-8"));
// const place = JSON.parse(fs.readFileSync(`${__dirname}/place.json`, "utf-8"));
// const random = JSON.parse(fs.readFileSync(`${__dirname}/random.json`, "utf-8"));
// const things = JSON.parse(fs.readFileSync(`${__dirname}/things.json`, "utf-8"));


const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

// Connect to the database and then execute the import or delete operations
mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 50000, // Increase timeout to 50000ms
    socketTimeoutMS: 50000, // Increase socket timeout to 50000ms
    bufferCommands: false, // Disable Mongoose's buffering
}).then(() => {
    console.log("DB connected successfully...");
    // Execute the command after the connection is established

    ///Read json file


    //Import data to DB
    const importData = async () => {
        try {


            // await Book.create(book, { validateBeforeSave: false });
            // console.log("Book imported successfully");

            // await Cartoon.create(cartoon, { validateBeforeSave: false });
            // console.log("Cartoon imported successfully");

            // await Country.create(country, { validateBeforeSave: false });
            // console.log("Country imported successfully");

            await Fruite.create(fruit, { validateBeforeSave: false });
            console.log("Fruit imported successfully");

            // await Fun.create(fun, { validateBeforeSave: false });
            // console.log("Fun imported successfully");

            // await Cinema.create(cinema, { validateBeforeSave: false });
            // console.log("Cinema imported successfully");

            // await Food.create(food, { validateBeforeSave: false });
            // console.log("Food imported successfully");

            // await Game.create(game, { validateBeforeSave: false });
            // console.log("Game imported successfully");

            // await History.create(history, { validateBeforeSave: false });
            // console.log("History imported successfully");

            // await Place.create(place, { validateBeforeSave: false });
            // console.log("Place imported successfully");

            // await Random.create(random, { validateBeforeSave: false });
            // console.log("Random imported successfully");

            // await Things.create(things, { validateBeforeSave: false });
            // console.log("Things imported successfully");

            console.log("Data sent ok");
            process.exit();
        } catch (err) {
            console.log("Error during data import:", err);
        }
    }

    //Delete all data from collections

    const deleteData = async () => {
        try {
            //     await System.deleteMany();
            //     await Book.deleteMany();
            //     await Country.deleteMany();
            //     await Fruite.deleteMany();
            // await Fun.deleteMany();
            // await Cartoon.deleteMany();
            // await Cinema.deleteMany();
            // await Food.deleteMany();
            // await Game.deleteMany();
            // await History.deleteMany();
            // await Place.deleteMany();
            // await Random.deleteMany();
            // await Things.deleteMany();
            process.exit();
        } catch (err) {
            console.log(err);
        }
    }

    if (process.argv[2] === '--import') {
        importData();
    } else if (process.argv[2] === '--delete') {
        deleteData();
    }
}).catch(err => {
    console.log(err);
});
