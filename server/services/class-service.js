const User = require('../models/user-model');
const Class = require('../models/class-model');
const userService = require('../services/user-service');
const mongoose = require('mongoose');

// For github users only
async function saveNewClass(name, userId) {
  // Save classId to User
  const id = new mongoose.Types.ObjectId();

  // c is class being created
  const c = new Class.ClassModel({
    _id: id,
    name: name,
    color: null,
    projects: [],
  });
  c.save();

  const user = await userService.findUserById(userId);
  user.classes.push(c);
  user.save();

  return c;
}

module.exports.saveNewClass = saveNewClass;

async function getClasses(userId) {
  let u = await userService.findUserById(userId);

  if (u) {
    return u.classes;
  }

  return null;
}

module.exports.getClasses = getClasses;

async function deleteClass(className, userId) {
  // TODO Develop better, more universal way to handle errors

  // Find the Class
  let c = await Class.ClassModel.findOne({ name: className });
  if (!c) {
    return { err: 'class-service.deleteClass: Invalid className' };
  }
  // Find the User
  let u = await userService.findUserById(userId);
  if (!u) {
    return { err: 'class-service.deleteClass: Invalid userId' };
  }
  // Delete the Class from the User's Class list
  u.classes = u.classes.filter((e) => e == c); // This is not working
  console.log(u.classes);
  u.save((err, result) => {
    if (err) {
      return err;
    } else {
      return result;
    }
  });
  // Delete the Class from the Class collection
  Class.ClassModel.deleteOne({ _id: c._id }, (err) => {
    if (err) {
      return { err: 'class-service.deleteClass: Invalid className' };
    }
  });
  return c;
}

module.exports.deleteClass = deleteClass;
