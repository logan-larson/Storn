const User = require('../models/user-model');
const mongoose = require('mongoose');

async function findUserByGithubId(id) {
	return await User.UserModel.findOne({ githubId: id });
}

module.exports.findUserByGithubId = findUserByGithubId;

async function findUserByUsername(username) {
	return await User.UserModel.findOne({ username: username });
}

module.exports.findUserByUsername = findUserByUsername;

async function findUserById(id) {
	let githubUser = await findUserByGithubId(id);
	let user = await User.UserModel.findById(id);
	// As more login capabilities are added
	// let <newUser> = findUserByNewWay(id);
	// if (<newUser>) { return <newUser>; }

	if (githubUser) {
		return githubUser;
	}

	if (user) {
		return user;
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
