const db = require("../model/index");
const excel = require("exceljs");
const User = db.user;
const Task = db.task;
const printUser = async (req, res) => {
  let users = await User.findAll({});
  console.log("running");
  try {
    let workBook = new excel.Workbook();
    const sheet = workBook.addWorksheet("users");
    sheet.columns = [
      { header: "name", key: "name", width: "25" },
      { header: "phone", key: "phone", width: "50" },
      { header: "password", key: "password", width: "50" },
      { header: "email", key: "email", width: "50" },
    ];
    await users.map((u, idx) => {
      sheet.addRow({
        name: u.name,
        phone: u.phone,
        password: u.password,
        email: u.email,
      });
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
const printTask = async (req, res) => {
  const tasks = await Task.findAll({});
  console.log(tasks);
  try {
    let workBook = new excel.Workbook();
    const sheet = workBook.addWorksheet("users");
    sheet.columns = [
      { header: "task", key: "desc", width: "25" },
      { header: "status", key: "status", width: "50" },
      
    ];
    await tasks.map((u, idx) => {
      sheet.addRow({
        desc: u.desc,
        status: u.status,
      });
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
module.exports = { printUser, printTask };
