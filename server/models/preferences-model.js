const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const preferencesSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
});

exports.PreferencesSchema = preferencesSchema;

exports.PreferencesModel = mongoose.model('Preferences', preferencesSchema);
