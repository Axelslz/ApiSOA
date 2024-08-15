const AlumnoService = require('../services/alumnoService');

// Funciones controladoras para manejar las solicitudes relacionadas con los alumnos
async function getAllAlumnos(req, res) {
    try {
        const alumnos = await AlumnoService.getAllAlumnos();
        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function createAlumno(req, res) {
    try {
        const alumnoData = req.body;
        console.log(alumnoData); 
        const newAlumno = await AlumnoService.createAlumno(alumnoData);
        res.status(201).json(newAlumno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const getAllAlumnosByTutor = async (req, res) => {
    const { tutorId } = req.params;
    
    try {
        const alumnos = await AlumnoService.getAllAlumnosByTutor(tutorId);
        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los alumnos del tutor' });
    }
};

module.exports = {
    getAllAlumnos,
    createAlumno,
    getAllAlumnosByTutor
};
