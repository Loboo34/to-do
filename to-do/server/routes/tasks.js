const express = require("express");
const Task = require('../models/Tasksmodel')

const router = express.Router();

//gget all tsks
router.get("/", (req, res) => {
  res.json({ mssg: "come get some" });
});

//get single workout
router.get("/:id", (req, res) => {
    res.json({ mssg: "come get some" });
});

//post task
router.post("/", async(req, res) => {
  const {title, type, date, time } = req.boody;

try{
const task = await Task.create({title, type, date, time})
res.status(200).json(task)
} catch(error){
    res.status(400).json({message: error.message})
} 
});

//delete task
router.delete("/:id", (req, res) => {
    res.json({ mssg: "come get some" });
});

module.exports = router;
