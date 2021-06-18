const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	githubId: String,
	name: String,
	// TEMP classes are strings
	classes: [String],
});

exports.UserSchema = userSchema;

exports.UserModel = mongoose.model('User', userSchema);
