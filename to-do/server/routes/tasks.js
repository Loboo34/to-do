const express = require("express");
const {
  addTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
  getIncompleteTasks,
    getCompletedTasks,
    updateTaskStatus,
} = require("../controlers/tasksControlers");

const router = express.Router();

//gget all tsks
router.get("/", getTasks);

//get completed tasks
router.get("/completed", getCompletedTasks);

//get incomplete tasks
router.get("/incomplete", getIncompleteTasks);

//get single workout
router.get("/:id", getTask);
//get tasks by type
//router.get("/:type", filterByType);

//post task
router.post("/", addTask);

//update task status
router.patch("/:id/status", updateTaskStatus);

//delete task
router.delete("/:id", deleteTask);

//update task
router.patch("/:id", updateTask);




module.exports = router;
