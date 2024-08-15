const TutorRepository = require('../data/repositories/tutorRepository');
const AlumnoRepository = require('../data/repositories/alumnoRepository');

class TutorService {
    static async getAllTutors() {
        const tutorRepository = new TutorRepository();
        return await tutorRepository.getAllTutors();
    }

    static async createTutor(tutorData) {
        const tutorRepository = new TutorRepository();
        return await tutorRepository.createTutor(tutorData);
    }

    static async getAllAlumnosByTutor(tutorId) {
        try {
            const alumnos = await AlumnoRepository.getAllAlumnosByTutor(tutorId);
            return alumnos;
        } catch (error) {
            throw new Error('Error al obtener los alumnos del tutor');
        }
    }

    static async assignAlumnoToTutor(tutorId, alumnoId) {
        try {
            await TutorRepository.assignAlumnoToTutor(tutorId, alumnoId);
        } catch (error) {
            throw new Error('Error al asignar alumno al tutor');
        }
    }
}

module.exports = TutorService;

