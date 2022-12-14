const express = require("express");
const actorController = require('../controllers/actor.controller');

require('dotenv').config();

const router = express.Router();

router.post("/create", actorController.createActor);
// router.delete("/delete", actorController.deleteActor);
// router.put("/update", actorController.updateActor);
router.get("/", actorController.findAllActors);

// export default router;
module.exports = router;