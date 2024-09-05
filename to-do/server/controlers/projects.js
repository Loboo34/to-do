const Projects = require("../models/projects");
const mongoose = require("mongoose");

//get projects
const getProjects = async (req, res) => {
  const projects = await Projects.find({}).sort({ cratedAt: -1 });

  res.status(200).json(projects);
};

//get single project
const getProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Project" });
  }

  const project = await Projects.findById(id);

  if (!project) {
    return res.status(404).json({ error: "No such Project" });
  }

  res.status(200).json(project);
};

//add project
const addProject = async (req, res) => {
  const { name, type } = req.body;

  try {
    const project = await Projects.create({ name, type });
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete project
const deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Project" });
  }

  const project = await Projects.findOneAndDelete({ _id: id });

  if (!project) {
    return res.status(404).json({ error: "No such Project" });
  }

  res.status(200).json({ project, message: "Project deleted" });
};
module.exports = {
  addProject,
  getProjects,
  getProject,
  deleteProject,
};
