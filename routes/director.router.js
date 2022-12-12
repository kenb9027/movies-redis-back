const express = require("express");
const directorController = require('../controllers/director.controller');

require('dotenv').config();

const router = express.Router();


router.get("/", directorController.findAllDirector);

// export default router;
module.exports = router;