'use strict';
///api/campuses

const express = require('express');
const db = require('../models');
const Campus = db.models.campus;
const Student = db.models.student;

// This router is already mounted on `/api/campuses` in server/app.js
const router = express.Router();

//Find all the campuses
router.get('/', async (req, res, next) => {
  let campuses;
  try {
    campuses = await Campus.findAll();
  } catch (error) {
    return next(error);
  }
  res.json(campuses);
});

//Create a new campus
router.post('/', async (req, res, next) => {
  let campus;
  try {
    campus = await Campus.create(req.body);
  } catch (error) {
    return next(error);
  }
  res.status(201);
  res.json(campus);
});

//Find campuses by id
router.get('/:id', async (req, res, next) => {
  let campus;
  try {
    campus = await Campus.findByPk(req.params.id, {
      include: Student,
    });
  } catch (error) {
    return next(error);
  }
  res.json(campus);
});

//Find campus by ID with students.
router.get('/:id/students', async (req, res, next) => {
  let campusWithStudents;
  try {
    campusWithStudents = await Campus.findByPk(req.params.id, {
      include: Student,
    });
  } catch (error) {
    return next(error);
  }
  res.json(campusWithStudents.students);
});

//Create new student for that campus
router.post('/:id/students', async (req, res, next) => {
  let newStudent;
  try {
    newStudent = await Student.create({
      name: req.body.name,
      phase: req.body.phase,
      campusId: req.params.id,
    });
  } catch (error) {
    return next(error);
  }
  res.status(201);
  res.json(newStudent);
});

module.exports = router;
