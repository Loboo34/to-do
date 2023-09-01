const express = require("express");
const { addTask, getTasks, getTask, deleteTask, filterByType } = require("../controlers/tasksControlers")

const router = express.Router();

//gget all tsks
router.get("/", getTasks);

//get single workout
router.get("/:id", getTask);

//get tasks by type
router.get("/:type", filterByType);

//post task
router.post("/", addTask);  

//delete task
router.delete("/:id", deleteTask);



module.exports = router;
