const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Class = require('../models/class-model');

const userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  githubId: String,
  name: String,
  // TEMP preferences is a String
  preferences: String,
  classes: [Class.ClassModel],
});

exports.UserSchema = userSchema;

exports.User = mongoose.model('User', userSchema);
