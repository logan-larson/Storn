const Project = require('../models/project-model');
const userService = require('./user-service');
const mongoose = require('mongoose');

// For github users only
async function saveNewProject(projectName, classId) {
  const p = new Project.ProjectModel({
    _id: new mongoose.Types.ObjectId(),
    classId: classId,
    name: projectName,
    //details: null,
    //board: null,
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
