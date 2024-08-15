const express = require('express');
const router = express.Router();
const { getAllTutors, createTutor, getAllAlumnosByTutor, assignAlumnoToTutor } = require('../controllers/tutorController');
const { getAllAlumnos, createAlumno } = require('../controllers/alumnoController');
const { assignMateriaToAlumno, getAllMateriasByAlumno, createMateria } = require('../controllers/materiaController');

// Rutas relacionadas con los tutores
router.get('/tutors', getAllTutors);
router.get('/tutors/:tutorsId/alumnos', getAllAlumnosByTutor);
router.post('/tutors', createTutor);

// Rutas relacionadas con los alumnos
router.get('/alumnos', getAllAlumnos);
router.post('/alumnos', createAlumno);
router.post('/tutors/:tutorId/alumnos/:alumnoId', assignAlumnoToTutor);

// Rutas relacionadas con las materias
router.get('/alumnos/:alumnoId/materias', getAllMateriasByAlumno);
router.post('/alumnos/:alumnoId/materias', createMateria);
router.post('/alumnos/:alumnoId/materias/:materiaId', assignMateriaToAlumno);

module.exports = router;
