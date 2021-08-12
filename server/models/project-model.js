const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjectDetailsSchema =
  require('../models/project-details-model').ProjectDetailsSchema;

const ProjectBoardSchema =
  require('../models/project-board-model').ProjectBoardSchema;

const projectSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  details: ProjectDetailsSchema,
  board: ProjectBoardSchema,
});

exports.ProjectSchema = projectSchema;

exports.ProjectModel = mongoose.model('Project', projectSchema);
