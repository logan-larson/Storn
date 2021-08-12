const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const milestoneSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String,
  dateStarted: Date,
  deadline: Date,
  timeEstimation: Number,
  timeActual: Number,

  // Behind the scenes
  status: Number, // 0 - To-Do, 1 - Doing, 2 - Done
  listPostion: Number,
});

exports.MilestoneSchema = milestoneSchema;

exports.MilestoneModel = mongoose.model('Milestone', milestoneSchema);
