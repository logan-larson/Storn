const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  hours: Number,
  minutes: Number,
});

exports.TimeSchema = timeSchema;

exports.TimeModel = mongoose.model('Time', timeSchema);
