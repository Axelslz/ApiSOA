const MateriaRepository = require('../data/repositories/materiaRepository');

class MateriaService {
    constructor() {
        this.materiaRepository = new MateriaRepository();
    }

    getAllMaterias() {
        return this.materiaRepository.getAllMaterias();
    }

    createMateria(materiaData) {
        return this.materiaRepository.createMateria(materiaData);
    }

    assignMateriaToAlumno(alumnoId, materiaId) {
        return this.materiaRepository.assignMateriaToAlumno(alumnoId, materiaId);
    }
}

module.exports = new MateriaService();
