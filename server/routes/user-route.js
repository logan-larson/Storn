const express = require('express');
const router = express.Router();

const user = require('../services/user-service');
const classService = require('../services/class-service');

router.use(express.json());

// POST to create a new class
router.post('/api/v1/user/class', async (req, res) => {
  // Functionality to pull general id from request
  // So I don't have to make unique functions for each auth method

  let newClass = await classService.saveNewClass(
    req.body.name,
    req.session.githubId
  );
  if (newClass) {
    res.json({ name: newClass.name, projects: [] });
  }
});

// DELETE to delete a class
router.delete('/api/v1/user/class', async (req, res) => {
  // Functionality to pull general id from request
  // So I don't have to make unique functions for each auth method

  let deletedClass = await classService.deleteClass(
    req.body.name,
    req.session.githubId
  );

  if (deletedClass) {
    res.json(deletedClass);
  }
});

// GET returns list of classes associated with a user
router.get('/api/v1/user/class', async (req, res) => {
  let classes = await classService.getClasses(req.session.githubId);
  if (classes) {
    res.json(classes);
  }
});

module.exports = router;
