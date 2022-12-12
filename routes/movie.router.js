const express = require("express");
const movieController = require('../controllers/movie.controller');

require('dotenv').config();

const router = express.Router();


router.get("/", movieController.findAllMovies);

// export default router;
module.exports = router;