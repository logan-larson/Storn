const User = require('../models/user-model');
const mongoose = require('mongoose');

async function findUserByGithubId(id) {
  return await User.UserModel.findOne({ githubId: id });
}

module.exports.findUserByGithubId = findUserByGithubId;

async function findUserById(id) {
  let githubUser = await findUserByGithubId(id);
  // As more login capabilities are added
  // let <newUser> = findUserByNewWay(id);
  // if (<newUser>) { return <newUser>; }

  if (githubUser) {
    return githubUser;
  }

  return null;
}

module.exports.findUserById = findUserById;

async function saveNewUser(name, githubId) {
  const user = new User.UserModel({
    _id: new mongoose.Types.ObjectId(),
    githubId: githubId,
    githubClientId: null,
    githubClientSecret: null,
    name: name,
    classes: [],
    preferences: null,
  });

  user.save((err, result) => {
    if (err) {
      return err;
    } else {
      return result;
    }
  });
}

module.exports.saveNewUser = saveNewUser;
