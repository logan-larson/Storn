const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ClassSchema = require('../models/class-model').ClassSchema;
const PreferencesSchema =
	require('../models/preferences-model').PreferencesSchema;

const userSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	githubId: String,
	// Eventually store these as encrypted strings
	githubClientId: String,
	githubClientSecret: String,
	name: String,
	username: String,
	password: String,
	// TEMP preferences is a String
	preferences: PreferencesSchema,
});

exports.UserSchema = userSchema;

exports.UserModel = mongoose.model('User', userSchema);
