const express = require("express");
const {
  getProjects,
  addProject,
  deleteProject,
} = require("../controlers/projects");

const router = express.Router();

router.get("/", getProjects);

router.post("/", addProject);

router.delete("/", deleteProject);

module.exports = router;
