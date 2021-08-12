const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectDetailsSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  deadline: Date,
  timeEstimation: Number,
  timeActual: Number,
});

exports.ProjectDetailsSchema = projectDetailsSchema;

exports.ProjectDetailsModel = mongoose.model(
  'ProjectDetails',
  projectDetailsSchema
);
