const express = require('express');
const router = express.Router();

const sessionService = require('../services/session-service');
const projectService = require('../services/project-service');

router.use(express.json());

router.post('/api/v1/session/start', async (req, res) => {
	let s = await sessionService.createSession(req.body);
	res.send(s);
});

router.put('/api/v1/session/pauseStart', async (req, res) => {
	let s = await sessionService.pauseStart(req.body);
	res.send(s);
});

router.put('/api/v1/session/pauseEnd', async (req, res) => {
	let s = await sessionService.pauseEnd(req.body);
	res.json(s);
});

router.put('/api/v1/session/end', async (req, res) => {
	let t = await sessionService.endSession(req.body);
	let sessions = await projectService.getSessions(req.body.projectId);
	let totalTime = await projectService.calculateTotalTime(sessions);

	let details = await projectService
		.getProject(req.body.projectId)
		.then((project) => {
			return project.details;
		});

	details.totalTimeActual = totalTime;

	projectService.updateProjectDetails(req.body.projectId, details);

	let timeObj = {
		totalTime: totalTime,
		sessionTime: t,
	};

	res.json(timeObj);
});

module.exports = router;
