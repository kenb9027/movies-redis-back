const express = require("express");
const categoryController = require('../controllers/category.controller');

require('dotenv').config();

const router = express.Router();

router.post("/create", categoryController.createCategory);
// router.delete("/delete", categoryController.deleteCategory);
// router.put("/update", categoryController.updateCategory);
router.get("/", categoryController.findAllCategorys);

// export default router;
module.exports = router;