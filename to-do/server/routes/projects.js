const express = require("express");
const {
  getProjects,
  addProject,
  deleteProject,
  getProject,
} = require("../controlers/projects");

const router = express.Router();

router.get("/", getProjects);

router.get("/:id", getProject);

router.post("/", addProject);

router.delete("/:id", deleteProject);

module.exports = router;
