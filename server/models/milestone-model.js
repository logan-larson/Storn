const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const milestoneSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  estimatedTime: Number,
  dateStarted: Date,
});

exports.MilestoneSchema = milestoneSchema;

exports.MilestoneModel = mongoose.model('Milestone', milestoneSchema);
