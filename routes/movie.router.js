const express = require("express");
const movieController = require('../controllers/movie.controller');

require('dotenv').config();

const router = express.Router();


router.get("/", movieController.findAllMovies);
router.get("/:id", movieController.findOneMovie);

// export default router;
module.exports = router;