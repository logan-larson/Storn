const Project = require('../models/project-model');
const Board = require('../models/project-board-model');
const Details = require('../models/project-details-model');
const Session = require('../models/session-model');
const userService = require('./user-service');
const mongoose = require('mongoose');

// For github users only
async function saveNewProject(projectName, classId) {
	const d = new Details.ProjectDetailsModel({
		_id: new mongoose.Types.ObjectId(),
		name: projectName,
		dateStarted: new Date(),
		deadline: new Date(),
		totalTimeEstimated: 0,
		totalTimeActual: 0,
	});
	const p = new Project.ProjectModel({
		_id: new mongoose.Types.ObjectId(),
		classId: classId,
		details: d,
		board: Board.ProjectBoardSchema,
	});

	p.save();

	console.log(p);
	return p;
}

module.exports.saveNewProject = saveNewProject;

async function getProjects(classId) {
	return await Project.ProjectModel.find({ classId: classId });
}

module.exports.getProjects = getProjects;

async function getProject(projectId) {
	return await Project.ProjectModel.findOne({ _id: projectId });
}

module.exports.getProject = getProject;

// Update functionality

async function deleteProject(projectId) {
	// Delete the Project from the Project collection
	Project.ProjectModel.deleteOne({ _id: projectId }, (err) => {
		if (!err) {
			return { msg: 'project-service.deleteProject: Successfully deleted' };
		}
		return { err: 'project-service.deleteProject: Invalid projectId' };
	});
}

module.exports.deleteProject = deleteProject;

async function updateProjectDetails(projectId, details) {
	let d = await Project.ProjectModel.updateOne(
		{ _id: projectId },
		{ details: details }
	);

	if (d.nModified <= 0) {
		return { err: 'error' }; // Make better
	}

	return { msg: 'success' };
}

module.exports.updateProjectDetails = updateProjectDetails;

async function getSessions(projectId) {
	let s = await Session.SessionModel.find({ projectId: projectId });
	return s;
}
module.exports.getSessions = getSessions;

function calculateTotalTime(s) {
	let t = 0;
	s.forEach((element) => {
		t = t + element.totalTime;
	});
	return t;
}
module.exports.calculateTotalTime = calculateTotalTime;
