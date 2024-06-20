const express = require("express");
const morgan = require("morgan");


const letterRouter = require("./routes/customRoutes")
const country = require("./routes/countryLettersRouter");
const fruit = require("./routes/fruitRoute");
const fun = require("./routes/funRoute");
const book = require("./routes/bookRouter");
const cartoon = require("./routes/cartoonRouter");
const cinema = require("./routes/cinemaRouter");
const food = require("./routes/foodRouter");
const game = require("./routes/gameRouter");
const history = require("./routes/historyRouter");
const place = require("./routes/placeRouter");
const random = require("./routes/randomRouter");
const things = require("./routes/thingsRouter");

const app = express();




if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(express.json());


app.use("/api", letterRouter);
app.use("/api", country);
app.use("/api", fruit);
app.use("/api", fun);
app.use("/api", book);
app.use("/api", cartoon);
app.use("/api", cinema);
app.use("/api", food);
app.use("/api", game);
app.use("/api", history);
app.use("/api", place);
app.use("/api", random);
app.use("/api", things);


module.exports = app;