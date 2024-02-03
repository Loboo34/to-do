const Tasks = require("../models/Tasksmodel");
const mongoose = require("mongoose");

//get all tasks
const getTasks = async (req, res) => {
  const tasks = await Tasks.find({}).sort({ cratedAt: -1 });

  res.status(200).json(tasks);
};

//get single task
const getTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Task" });
  }

  const task = await Tasks.findById(id);

  if (!task) {
    return res.status(404).json({ error: "No such Task" });
  }

  res.status(200).json(task);
};

//get tasks by type
const filterByType = async (req, res) => {
  const type = req.query.type;

  if(!type) {
    res.status(404).json({message: 'type param required'})
  }

  try {
    const filteredTasks = await Tasks.find({ type });
    res.json({ tasks: filteredTasks });
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "internal error" });
  }
};

//add task
const addTask = async (req, res) => {
  const { title, description, type, date, time } = req.body;

  try {
    const task = await Tasks.create({ title, description, type, date, time });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete task
const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Task" });
  }

  const task = await Tasks.findOneAndDelete({ _id: id });

  if (!task) {
    return res.status(404).json({ error: "No such Task" });
  }

  res.status(200).json(task);
};

// const getCategory = async (req, res) => {
//   const type = req.query.category;

//   if (!type) {
//     return res.status(404).json({ error: "type not specified" });
//   }
//   try {
//     const filteredTasks = await Tasks.find({ category });

//     res.json({ tasks: filteredTasks });
//   } catch (err) {
//     console.log(err);
//     res.status(404).json({ error: "server error" });
//   }
// };

module.exports = {
  getTasks,
  getTask,
  addTask,
  deleteTask,
  filterByType,
};
