const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectDetailsSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: String,
	description: String,
	dateStarted: Date,
	deadline: Date,
	totalTimeEstimated: Number,
	totalTimeActual: Number,
});

exports.ProjectDetailsSchema = projectDetailsSchema;

exports.ProjectDetailsModel = mongoose.model(
	'ProjectDetails',
	projectDetailsSchema
);
