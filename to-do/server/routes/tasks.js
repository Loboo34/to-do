const express = require("express");
const { addTask, getTasks, getTask} = require("../controlers/tasksControlers")

const router = express.Router();

//gget all tsks
router.get("/", getTasks);

//get single workout
router.get("/:id", getTask);

//post task
router.post("/", addTask);

//delete task
router.delete("/:id", (req, res) => {
    res.json({ mssg: "come get some" });
});

module.exports = router;
