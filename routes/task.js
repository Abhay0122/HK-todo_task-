const express = require("express");
const router = express.Router();
const { addTask, getAllTasks, taskPage } = require("../controller/task");
router.get("/", taskPage);

router.get("/all-task", getAllTasks);
router.post("/", addTask);
module.exports = router;
