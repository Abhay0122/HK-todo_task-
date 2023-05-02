const db = require("../model/index");
const User = db.user;
const Task = db.task;
const excel = require("exceljs");
const fs = require("fs");
const addUser = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.password ||
    !req.body.phone
  )
    return res.render("pages/err", {
      msg: "input invalid : 403",
    });
  const info = {
    name: req.body.name,
    password: req.body.password,
    phone: req.body.phone,
    email: req.body.email,
  };
  const user = await User.create(info);
  console.log(user);
  //   res.status(200).json(user);
  res.redirect("/task");

};
// get all users
const getUser = async (req, res) => {
  let users = await User.findAll({});
  res.status(200).json(users);
};

//get all user tasks
const getUserTasks = async (req, res) => {
  let data = await User.findAll({
    include: [{ model: Task, as: "task" }],
  });
  res.status(200).json(data);
};
const printUserTabel = async (req, res) => {
  let users = await User.findAll({});
  console.log("running");
  try {
    let workBook = new excel.Workbook();
    const sheet = workBook.addWorksheet("users");
    sheet.columns = [
      { header: "name", key: "user", width: "25" },
      { header: "phone", key: "phone", width: "50" },
      { header: "password", key: "password", width: "50" },
    ];
    await users.map((u, idx) => {
      sheet.addRow({ name: u.name, phone: u.phone, password: u.password });
    });
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreedsheet.sheet"
    );
    res.setHeader("Content-Disposition", "attachment;filename=" + "user.xlsx");
    workBook.xlsx.write(res);
  } catch (error) {
    console.log(err);
  }
};
module.exports = { getUser, addUser, getUserTasks, printUserTabel };
