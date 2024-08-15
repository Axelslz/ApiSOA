const AlumnoRepository = require('../data/repositories/alumnoRepository');

// Obtener todos los alumnos
const getAllAlumnos = async () => {
    try {
        const alumnos = await AlumnoRepository.getAllAlumnos();
        return alumnos;
    } catch (error) {
        throw new Error('Error al obtener los alumnos');
    }
};

// Crear un alumno
const createAlumno = async (alumnoData) => {
    try {
        const nuevoAlumnoId = await AlumnoRepository.createAlumno(alumnoData);
        return nuevoAlumnoId;
    } catch (error) {
        throw new Error('Error al crear el alumno');
    }
};

// Obtener todos los alumnos de un tutor
const getAllAlumnosByTutor = async (tutorId) => {
    try {
        const alumnos = await AlumnoRepository.getAllAlumnosByTutor(tutorId);
        return alumnos;
    } catch (error) {
        throw new Error('Error al obtener los alumnos del tutor');
    }
};

module.exports = {
    getAllAlumnos,
    createAlumno,
    getAllAlumnosByTutor
};
