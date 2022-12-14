const express = require("express");
const directorController = require('../controllers/director.controller');

require('dotenv').config();

const router = express.Router();

router.post("/create", directorController.createDirector);
router.delete("/delete", directorController.deleteDirector);
router.put("/update", directorController.updateDirector);
router.get("/search", directorController.findOneDirector);
router.get("/", directorController.findAllDirector);

// export default router;
module.exports = router;