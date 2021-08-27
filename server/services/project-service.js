const Project = require('../models/project-model');
const userService = require('./user-service');
const mongoose = require('mongoose');

// For github users only
async function saveNewProject(projectName, userId) {
  const user = await userService.findUserById(userId);

  if (!user) {
    return { err: 'project-service.saveNewProject: Invalid userId' };
  }

  const p = new Project.ProjectModel({
    _id: new mongoose.Types.ObjectId(),
    userId: user._id,
    name: projectName,
    //details: null,
    //board: null,
  });

  p.save();

  console.log(`\nSaved new project\n`);
  return p;
}

module.exports.saveNewProject = saveNewProject;

/*
async function getClasses(userId) {
  let u = await userService.findUserById(userId);

  if (u) {
    return await Class.ClassModel.find({ userId: u._id });
  }

  return null;
}

module.exports.getClasses = getClasses;


// Update functionality



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
