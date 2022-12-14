const express = require("express");
const ageclassController = require('../controllers/ageclass.controller');

require('dotenv').config();

const router = express.Router();

router.post("/create", ageclassController.createAgeClass);
// router.delete("/delete", ageclassController.deleteAgeclass);
// router.put("/update", ageclassController.updateAgeclass);
router.get("/", ageclassController.findAllAgeClasss);

// export default router;
module.exports = router;