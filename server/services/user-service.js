const User = require('../models/user-model');
const mongoose = require('mongoose');

async function findUserByGithubId(id) {
	return await User.UserModel.findOne({ githubId: id });
}

module.exports.findUserByGithubId = findUserByGithubId;

async function findByUsername(username) {
	return await User.UserModel.findOne({ username: username });
}

module.exports.findByUsername = findByUsername;

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

async function createNewUser(username, password) {
	let id = new mongoose.Types.ObjectId();
	const user = new User.UserModel({
		_id: id,
		username: username,
		password: password,
	});

	await user.save();

	return id;
}

module.exports.createNewUser = createNewUser;

/*
async function saveNewUser(name, githubId) {
	let id = new mongoose.Types.ObjectId();
	const user = new User.UserModel({
		_id: id,
		githubId: githubId,
		githubClientId: null,
		githubClientSecret: null,
		name: name,
	});

	user.save((err, result) => {
		if (err) {
			console.log('error');
			return err;
		} else {
			console.log('nominal');
			return id;
		}
	});
}

module.exports.saveNewUser = saveNewUser;
*/
