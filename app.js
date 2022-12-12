const express = require("express");
const cors = require("cors");
require("dotenv").config();


// LOADING ROUTES
const movieRouter = require("./routes/movie.router");
const directorRouter = require("./routes/director.router");


const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

//ROUTER
app.use("/movies", movieRouter);
app.use("/directors", directorRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
