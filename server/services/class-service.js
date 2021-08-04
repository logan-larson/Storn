const User = require('../models/user-model');
const Class = require('../models/class-model');
const userService = require('../services/user-service');
const mongoose = require('mongoose');

// For github users only
async function saveNewClass(name, githubId) {
	// Save classId to User
	const id = new mongoose.Types.ObjectId();

	const c = new Class.ClassModel({
		_id: id,
		name: name,
		projects: [],
	});

	//const u =

	u.classes.push(id);
	u.save();

	return name;
}

module.exports.saveNewClass = saveNewClass;
