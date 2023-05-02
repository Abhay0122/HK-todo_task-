const express = require("express");
const app = express();
require("dotenv").config();
const userRoutes = require("./routes/user");
const taskRoutes = require("./routes/task");
const bodyParser = require("body-parser");
const errPage = require("./controller/other");
const { printUser, printTask } = require("./controller/print");
const excel = require("exceljs");
const fs = require("fs");
const db = require("./model/index");
const User = db.user;
const Task = db.task;
const { getUserTasks } = require("./controller/user");
const path = require("path");

// Database
require("./db/config");

// viewEngine 
app.set("view engine", "ejs");
app.set("views", "views");

//bodyParser 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// static
app.use(express.static("public"));

app.use("/register", userRoutes);
app.use("/task", taskRoutes);
app.get("/excel-user", printUser);
app.get("/excel-task", printTask);
app.get("/error-page", errPage);
app.get("/dummy", getUserTasks);
app.use("/", (req, res) => {
  res.render("pages/home");
});

// PORT
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
