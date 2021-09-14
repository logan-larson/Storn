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

	let tpt = session.totalPauseTime + pt;

	let s = await Session.SessionModel.updateOne(
		{ _id: session._id },
		{
			pauseEnd: session.pauseEnd,
			totalPauseTime: tpt,
		}
	);

	let news = await Session.SessionModel.findById(session._id);

	return tpt;
}
module.exports.pauseEnd = pauseEnd;

/**
 *
 * @param session Session to stop
 * @returns totalTime
 */
async function endSession(session) {
	// Check if paused
	/*
	let pauseCheck =
		Date.parse(session.pauseEnd) - Date.parse(session.pauseStart);

	if (isNaN(pauseCheck)) {
		session.pauseEnd = new Date();
		session.totalPauseTime =
			session.totalPauseTime +
			(session.pauseEnd - Date.parse(session.pauseStart));
	}
  */

	let t = Date.parse(session.end) - Date.parse(session.start);
	t = t - session.totalPauseTime;

	let s = await Session.SessionModel.updateOne(
		{ _id: session._id },
		{
			end: session.end,
			totalTime: t,
		}
	);

	let news = await Session.SessionModel.findById(session._id);

	return t;
}
module.exports.endSession = endSession;

async function deleteSessions(projectId) {
	let s = Session.SessionModel.deleteMany({ projectId: projectId });
	return s;
}
module.exports.deleteSessions = deleteSessions;
