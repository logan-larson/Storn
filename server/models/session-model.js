const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  start: Date,
  end: Date,
  pauseStart: Date,
  pauseEnd: Date,
  totalPauseTime: Number,
  totalTime: Number,
  projectId: String,
});

exports.SessionSchema = sessionSchema;

exports.SessionModel = mongoose.model('Session', sessionSchema);
