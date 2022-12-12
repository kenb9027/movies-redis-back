const express = require("express");
const cors = require("cors");
require("dotenv").config();


// LOADING ROUTES


const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

//ROUTER


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
