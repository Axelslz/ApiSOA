const MateriaService = require('../services/materiaService');

async function getAllMateriasByAlumno(req, res) {
    const { alumnoId } = req.params;
    try {
        const materias = await MateriaService.getAllMateriasByAlumno(alumnoId);
        res.json(materias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function createMateria(req, res) {
    try {
        const materiaData = req.body;
        const newMateria = await MateriaService.createMateria(materiaData);
        res.status(201).json(newMateria);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const assignMateriaToAlumno = async (req, res) => {
    const { alumnoId } = req.params;
    const materiaData = req.body;
    
    try {
        const materiaId = await MateriaService.createMateria(materiaData);
        await MateriaService.assignMateriaToAlumno(alumnoId, materiaId);
        res.status(201).json({ message: 'Materia asignada correctamente al alumno' });
    } catch (error) {
        res.status(500).json({ error: 'Error al asignar la materia al alumno' });
    }
};

module.exports = {
    getAllMateriasByAlumno,
    createMateria,
    assignMateriaToAlumno
};
