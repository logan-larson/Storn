const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ClassSchema = require('../models/class-model').ClassSchema;

const userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  githubId: String,
  name: String,
  // TEMP preferences is a String
  preferences: String,
  classes: [ClassSchema],
});

exports.UserSchema = userSchema;

exports.UserModel = mongoose.model('User', userSchema);
