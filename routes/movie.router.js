const express = require("express");
const movieController = require('../controllers/movie.controller');

require('dotenv').config();

const router = express.Router();


router.get("/", movieController.findAllMovies);
router.get("/redis", movieController.findAllMoviesFromRedis);
router.get("/search/:id", movieController.findOneMovie);
router.post("/create", movieController.createMovie);

// export default router;
module.exports = router;