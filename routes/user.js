const express = require("express");
const {
  addUser,
  getUser,
  getUserTasks,
  printUserTabel,
} = require("../controller/user");
const router = express.Router();
router.get("/register-print-user", (req, res) => {
  console.log("run ho raha hao");
  res.send("running");
});
router.get("/", (req, res) => {
  res.render("pages/resgister");
});

router.post("/", addUser);
module.exports = router;
