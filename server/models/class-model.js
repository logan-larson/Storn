const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Project = require('../models/project-model');

const classSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  color: String, // Hex code
  projects: [Project.ProjectModel],
});

exports.ClassSchema = classSchema;

exports.ClassModel = mongoose.model('Class', classSchema);
