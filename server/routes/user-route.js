const express = require('express');
const router = express.Router();

const user = require('../services/user-service');
const classService = require('../services/class-service');

router.use(express.json());

module.exports = router;
