const db = require("../model/index");
const User = db.user;
// model
const Task = db.task;

//1. Add Task
const addTask = async (req, res) => {
  if (
    !req.body.userId ||
    !req.body.task_status ||
    !req.body.desc
  )
    return res.render("pages/err", {
      msg: "input invalid : 403",
    });
  let data = {
    user_id: req.body.userId,
    status: req.body.task_status,
    desc: req.body.desc,
  };
  console.log(data);
  const task = await Task.create(data);
  //   res.status(200).send(task);
  res.redirect("/task");
};

const getAllTasks = async (req, res) => {
  const tasks = await Task.findAll({});
  res.status(200).send(tasks);
};
const taskPage = async (req, res) => {
  let AllUserTask = await User.findAll({
    include: [{ model: Task, as: "task" }],
  });
  let users = await User.findAll({});
  console.log(AllUserTask);
  res.render("pages/taskPage", {
    users,
    AllUserTask,
  });
};
module.exports = {
  addTask,
  getAllTasks,
  taskPage,
};
