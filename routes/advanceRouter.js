var express = require('express')
var router = express.Router()
const classroomController = require('../controllers').classroom
const studentController = require('../controllers').student
const lecturerController = require('../controllers').lecturer

/* Advance Router */
router.post('/student/add_course', studentController.addCourse)
router.post('/classroom/add_with_students', classroomController.addWithStudents)
router.post('/lecturer/add_with_course', lecturerController.addWithCourse)

module.exports = router
