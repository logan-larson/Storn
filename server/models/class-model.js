const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  githubId: String,
  name: String,
  // TEMP projects are strings
  projects: [String],
});

exports.ClassSchema = classSchema;

exports.ClassModel = mongoose.model('Class', classSchema);
