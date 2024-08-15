const db = require('../db');


class MateriaRepository {
    getAllMaterias() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM materias', (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });
    }

    createMateria(materiaData) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO materias SET ?', materiaData, (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results.insertId);
            });
        });
    }

    assignMateriaToAlumno(alumnoId, materiaId) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO alumno_materia (alumno_id, materia_id) VALUES (?, ?)', [alumnoId, materiaId], (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results.insertId);
            });
        });
    }
    
}

module.exports = MateriaRepository;
