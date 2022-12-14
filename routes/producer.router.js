const express = require("express");
const producerController = require('../controllers/producer.controller');

require('dotenv').config();

const router = express.Router();

router.post("/create", producerController.createProducer);
// router.delete("/delete", producerController.deleteProducer);
// router.put("/update", producerController.updateProducer);
router.get("/", producerController.findAllProducers);

// export default router;
module.exports = router;