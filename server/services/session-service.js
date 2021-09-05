const Session = require('../models/session-model');
const mongoose = require('mongoose');

async function createSession(session) {
  session._id = new mongoose.Types.ObjectId();
  let s = new Session.SessionModel(session);

  s.save();
  console.log(s);
  return s;
}

module.exports.createSession = createSession;
