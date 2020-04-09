'use strict';

const Sequelize = require('sequelize');
const db = require('./_db');

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  phase: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['junior', 'senior']],
    },
  },
});

Student.findByPhase = function (aPhase) {
  return Student.findAll({
    where: {
      phase: aPhase,
    },
  });
};

module.exports = Student;
