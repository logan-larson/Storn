const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjectSchema = require('../models/project-model').ProjectSchema;

const classSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: String,
  name: String,
  color: String, // Hex code
  projects: [ProjectSchema],
});

exports.ClassSchema = classSchema;

exports.ClassModel = mongoose.model('Class', classSchema);
