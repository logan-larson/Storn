const Project = require('../models/project-model');
const Board = require('../models/project-board-model');
const Details = require('../models/project-details-model');
const userService = require('./user-service');
const mongoose = require('mongoose');

// For github users only
async function saveNewProject(projectName, classId) {
  const d = new Details.ProjectDetailsModel({
    _id: new mongoose.Types.ObjectId(),
    name: projectName,
    dateStarted: new Date(),
    deadline: null,
    timeEstimation: 0,
    timeActual: 0,
  });
  const p = new Project.ProjectModel({
    _id: new mongoose.Types.ObjectId(),
    classId: classId,
    details: d,
    board: Board.ProjectBoardSchema,
  });

  p.save();

  console.log(p);
  return p;
}

module.exports.saveNewProject = saveNewProject;

async function getProjects(classId) {
  return await Project.ProjectModel.find({ classId: classId });
}

module.exports.getProjects = getProjects;

// Update functionality

async function deleteProject(projectId) {
  // Delete the Project from the Project collection
  Project.ProjectModel.deleteOne({ _id: projectId }, (err) => {
    if (!err) {
      return { msg: 'project-service.deleteProject: Successfully deleted' };
    }
    return { err: 'project-service.deleteProject: Invalid projectId' };
  });
}

module.exports.deleteProject = deleteProject;
