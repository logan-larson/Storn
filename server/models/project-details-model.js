const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Time = require('./time-model');

const projectDetailsSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String,
  dateStarted: Date,
  deadline: Date,
  totalTimeEstimated: Time.TimeSchema,
  totalTimeActual: Time.TimeSchema,
});

exports.ProjectDetailsSchema = projectDetailsSchema;

exports.ProjectDetailsModel = mongoose.model(
  'ProjectDetails',
  projectDetailsSchema
);
