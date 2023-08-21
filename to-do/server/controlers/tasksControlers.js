
const Tasks = require("../models/Tasksmodel");
const mongoose = require("mongoose");

//get all tasks
const getTasks = async(req, res) => {
    const tasks = await Tasks.find({}).sort({cratedAt: -1})

    res.status(200).json(tasks)
}

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

//add task
const addTask = async(req, res) => {
    const { title, type, date, time } = req.body;

    try {
      const task = await Tasks.create({ title, type, date, time });
      res.status(200).json(task);
    } catch (error) {
      res.status(400).json({ message: error.message });
    } 
}

//delete task
const deleteTask = async(req,res) => {
    const { id } = req.params

     if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({ error: "No such Task" });
     }

     const task = await Tasks.findOneAndDelete({_id: id})

  if (!task) {
    return res.status(404).json({ error: "No such Task" });
  }

  res.status(200).json(task); 

}



module.exports = {
    getTasks,
    getTask,
    addTask,
    deleteTask
    
}