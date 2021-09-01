const Class = require('../models/class-model');
const Project = require('../models/project-model');
const userService = require('../services/user-service');
const mongoose = require('mongoose');

// For github users only
async function saveNewClass(name, userId) {
  const user = await userService.findUserById(userId);

  if (!user) {
    return { err: 'class-service.saveNewClass: Invalid userId' };
  }

  const c = new Class.ClassModel({
    _id: new mongoose.Types.ObjectId(),
    userId: user._id,
    name: name,
    color: null,
  });

  c.save();

  console.log(`\nSaved new class\n`);
  return c;
}

module.exports.saveNewClass = saveNewClass;

async function getClasses(userId) {
  let u = await userService.findUserById(userId);

  if (u) {
    return await Class.ClassModel.find({ userId: u._id });
  }

  return null;
}

module.exports.getClasses = getClasses;

async function deleteClass(classId) {
  // Delete all projects associated with the class
  Project.ProjectModel.deleteMany({ classId: classId }, (err) => {
    if (err) {
      return { err: 'class-service.deleteClass: Invalid classId' };
    }
  });

  // Delete the Class from the Class collection
  Class.ClassModel.deleteOne({ _id: classId }, (err) => {
    if (!err) {
      return { msg: 'class-service.deleteClass: Successfully deleted' };
    }
    return { err: 'class-service.deleteClass: Invalid classId' };
  });
}

module.exports.deleteClass = deleteClass;
