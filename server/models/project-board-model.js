const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MilestoneSchema = require('../models/milestone-model');

const projectBoardSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  todo: [MilestoneSchema],
  doing: [MilestoneSchema],
  done: [MilestoneSchema],
});

exports.ProjectBoardSchema = projectBoardSchema;

exports.ProjectBoardModel = mongoose.model('ProjectBoard', projectBoardSchema);
