const TutorService = require('../services/tutorService');

// Funciones controladoras para manejar las solicitudes relacionadas con los tutores
async function getAllTutors(req, res) {
    try {
        const tutors = await TutorService.getAllTutors();
        res.json(tutors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function createTutor(req, res) {
    try {
        const tutorData = req.body;
        const newTutor = await TutorService.createTutor(tutorData);
        res.status(201).json(newTutor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener todos los alumnos de un tutor
async function getAllAlumnosByTutor(req, res) {
    const { tutorId } = req.params;

    try {
        const alumnos = await TutorService.getAllAlumnosByTutor(tutorId);
        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Asignar un alumno a un tutor
async function assignAlumnoToTutor(req, res) {
    const { tutorId, alumnoId } = req.params;

    try {
        await TutorService.assignAlumnoToTutor(tutorId, alumnoId);
        res.json({ message: 'Alumno asignado correctamente al tutor' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllTutors,
    createTutor,
    getAllAlumnosByTutor,
    assignAlumnoToTutor
};
