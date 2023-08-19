const express = require('express');

const router = express.Router()

//gget all tsks
router.get('/', (req, res) => {
res.json({mssg: "come get some"})
})

//get single workout
router.get("/:id", (req, res) => {});

//post task
router.post("/", (req, res) => {});

//delete task
router.delete("/:id", (req, res) => {});

module.exports = router