const express = require('express');
const router = express.Router();

const sessionService = require('../services/session-service');

router.use(express.json());

router.post('/api/v1/session/start', (req, res) => {
  sessionService.createSession(req.body);
  res.send(req.body);
});

module.exports = router;
