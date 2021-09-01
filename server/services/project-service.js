const Project = require('../models/project-model');
const Board = require('../models/project-board-model');
const Details = require('../models/project-details-model');
const userService = require('./user-service');
const mongoose = require('mongoose');

// For github users only
async function saveNewProject(projectName, classId) {
  const d = new Details.ProjectDetailsModel({
    _id: new mongoose.Types.ObjectId(),
    deadline: new Date(),
    timeEstimation: 0,
    timeActual: 0,
  });
  const p = new Project.ProjectModel({
    _id: new mongoose.Types.ObjectId(),
    classId: classId,
    name: projectName,
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
/*


async function deleteClass(classId) {
  // Delete the Class from the Class collection
  Class.ClassModel.deleteOne({ _id: classId }, (err) => {
    if (!err) {
      return { msg: 'class-service.deleteClass: Successfully deleted' };
    }
    return { err: 'class-service.deleteClass: Invalid classId' };
  });
}

module.exports.deleteClass = deleteClass;
*/
