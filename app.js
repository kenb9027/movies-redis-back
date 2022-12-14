const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();


// LOADING ROUTES
const movieRouter = require("./routes/movie.router");
const directorRouter = require("./routes/director.router");
const producerRouter = require("./routes/producer.router");
const categoryRouter = require("./routes/category.router");
const ageclassRouter = require("./routes/ageclass.router");
const actorRouter = require("./routes/actor.router");


const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

//ROUTER
app.use("/movies", movieRouter);
app.use("/directors", directorRouter);
app.use("/producers", producerRouter);
app.use("/categories", categoryRouter);
app.use("/ageclass", ageclassRouter);
app.use("/actors", actorRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
