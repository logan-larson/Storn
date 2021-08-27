const express = require('express');
const router = express.Router();

const classService = require('../services/class-service');

router.use(express.json());

/**
 * POST to create a new class
 */
router.post('/api/v1/class', async (req, res) => {
  let newClass = await classService.saveNewClass(
    req.body.name,
    req.session.githubId
  );

  if (!newClass.err) {
    res.json(newClass);
    return;
  }

  res.status(500).json(newClass);
});

/**
 * DELETE to delete a class
 */
router.delete('/api/v1/class', async (req, res) => {
  /* TODO: Error catching for bad requests */

  let deletedClass = await classService.deleteClass(req.body._id);

  // ERROR checking is not working as of 8/24
  /*  
  if (!deletedClass.err) {
    res.json(deletedClass);
    return;
  }
  */

  res.json(deletedClass);
  // res.status(500).json(deletedClass);
});

/**
 * GET returns list of classes associated with a user
 */
router.get('/api/v1/class', async (req, res) => {
  let classes = await classService.getClasses(req.session.githubId);
  if (classes) {
    res.json(classes);
  }
});

module.exports = router;
