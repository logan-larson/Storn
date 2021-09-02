const express = require('express');
const router = express.Router();

const projectService = require('../services/project-service');

router.use(express.json());

/**
 * POST to create a new project
 */
router.post('/api/v1/project', async (req, res) => {
  let newProject = await projectService.saveNewProject(
    req.body.projectName,
    req.body.id
  );

  if (!newProject.err) {
    res.json(newProject);
    return;
  }

  res.status(500).json(newProject);
});

/**
 * GET returns list of projects associated with a user
 */
router.get('/api/v1/project/:classId', async (req, res) => {
  let projects = await projectService.getProjects(req.params.classId);

  if (projects) {
    res.json(projects);
  }
});

/**
 * DELETE to delete a class
 */
router.delete('/api/v1/project', async (req, res) => {
  // TODO: Error catching for bad requests

  let deletedProject = await projectService.deleteProject(req.body._id);

  // ERROR checking is not working as of 8/24
  //if (!deletedProject.err) {
  //res.json(deletedProject);
  //return;
  //}

  res.json(deletedProject);
  // res.status(500).json(deletedProject);
});

module.exports = router;
