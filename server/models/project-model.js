const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
});

exports.ProjectSchema = projectSchema;

exports.ProjectModel = mongoose.model('Project', projectSchema);
