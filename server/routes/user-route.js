const express = require('express');
const router = express.Router();

const user = require('../services/user-service');
const classService = require('../services/class-service');

router.use(express.json());

// POST to create a new class
router.post('/api/v1/user/class', (req, res) => {
	classService.saveNewClass(req.body.name, req.session.githubId);

	console.log('Hit endpoint');
});

module.exports = router;
