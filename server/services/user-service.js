const User = require('../models/user');
const mongoose = require('mongoose');

async function findUserByGithubId(id) {
	let u = await User.UserModel.findOne({ githubId: id });

	if (u) {
		return u;
	} else {
		return null;
	}
}

module.exports.findUserByGithubId = findUserByGithubId;

async function saveNewUser(name, githubId) {
	const user = new User.UserModel({
		_id: new mongoose.Types.ObjectId(),
		githubId: githubId,
		name: name,
		classes: [],
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
