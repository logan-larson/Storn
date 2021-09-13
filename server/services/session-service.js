const Session = require('../models/session-model');
const mongoose = require('mongoose');

async function createSession(session) {
  session._id = new mongoose.Types.ObjectId();
  let s = new Session.SessionModel(session);

  s.save();
  return s;
}
module.exports.createSession = createSession;

async function pauseStart(session) {
  let s = await Session.SessionModel.updateOne(
    { _id: session._id },
    { pauseStart: session.pauseStart }
  );

  return s;
}
module.exports.pauseStart = pauseStart;

/**
 *
 * @param {*} session
 * @returns
 */
async function pauseEnd(session) {
  let pt = Date.parse(session.pauseEnd) - Date.parse(session.pauseStart);

  let s = await Session.SessionModel.updateOne(
    { _id: session._id },
    {
      pauseEnd: session.pauseEnd,
      totalPauseTime: session.totalPauseTime + pt,
    }
  );

  return s;
}
module.exports.pauseEnd = pauseEnd;

/**
 *
 * @param session Session to stop
 * @returns totalTime
 */
async function endSession(session) {
  // Check if paused
  if (Date.parse(session.pauseEnd) - Date.parse(session.pauseStart) < 0) {
    session.pauseEnd = new Date();
    session.totalPauseTime =
      session.totalPauseTime +
      (session.pauseEnd - Date.parse(session.pauseStart));
  }

  let t = Date.parse(session.end) - Date.parse(session.start);
  t = t - session.totalPauseTime;

  let s = await Session.SessionModel.updateOne(
    { _id: session._id },
    {
      end: session.end,
      totalTime: t,
    }
  );
  return t;
}
module.exports.endSession = endSession;
