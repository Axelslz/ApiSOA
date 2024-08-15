const db = require('../db');

class TutorRepository {
    async getAllTutors() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tutors', (error, results) => {
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

    async createTutor(tutorData) {
        const { name, email } = tutorData;
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO tutors (name, email) VALUES (?, ?)', [name, email], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results.insertId);
                }
            });
        });
    }

    async assignAlumnoToTutor (tutorId, alumnoId) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE alumnos SET tutor_id = ? WHERE id = ?', [tutorId, alumnoId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    };
}

module.exports = TutorRepository;



