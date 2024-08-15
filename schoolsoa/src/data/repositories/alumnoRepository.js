const db = require('../db');

class AlumnoRepository {
    async getAllAlumnos() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM alumnos', (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    async getAllAlumnosByTutor(tutorId) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM alumnos WHERE tutor_id = ?', [tutorId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    async createAlumno(alumnoData) {
        const { name, email } = alumnoData;
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO alumnos (name, email) VALUES (?, ?)', [name, email], (error, results) => {
                if (error) {
                    console.error('Error al insertar alumno en la base de datos:', error); // Registra el error
                    reject(error);
                } else {
                    resolve(results.insertId);
                }
            });
        });
    }
    

    async assignAlumnoToTutor(tutorId, alumnoId) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE alumnos SET tutor_id = ? WHERE id = ?', [tutorId, alumnoId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }
}

module.exports = AlumnoRepository;

