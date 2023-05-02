const express = require("express");
const { addUser } = require("../controller/user");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("pages/resgister");
});
router.post("/", addUser);
module.exports = router;
