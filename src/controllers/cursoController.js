const CursoModel = require('../models/cursoModel');

const getAllCursos = async (req, res) => {
    try {
        const { name } = req.query
        const cursos = await CursoModel.getCursos(name);
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar cursos.' });
    }
};

const getCursoById = async (req, res) => {
    try {
        const course = await CursoModel.getCursosById(req.params.id);
        if (!course) {
            return res.status(404).json({ error: 'Curso não encontrado.' });
        }
        res.json(course);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar Curso.' });
    }
}

const createCurso = async (req, res) => {
    try {
        const { name, descricao, instrutor_id } = req.body;
        if (!name || !descricao || !instrutor_id) {
            return res.status(400).json({ message: "Preencha todos os campos obrigatórios." });
        }
        const curso = await CursoModel.createCurso(name, descricao, instrutor_id);
        res.status(201).json(curso);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar o Curso." });
    }
}

const updateCurso= async (req, res) => {
    try {
        const { name, descricao, instrutor_id } = req.body;
        const course = await CursoModel.updateCursos(req.params.id, name, descricao, instrutor_id);
        if (!course) {
            return res.status(404).json({ error: "Curso não encontrado." });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar o curso." });
    }
}


const deleteCurso = async (req, res) => {
    try {
        const result = await CursoModel.deleteCursos(req.params.id);
        if (result.error) {
            return res.status(404).json(result);
        }
        res.json(result);

    } catch (error) {
        console.error('Erro ao buscar Curso:', error);
        res.status(500).json({ error: 'Erro ao deletar Curso.' });
    }
}

module.exports = {getAllCursos, getCursoById, deleteCurso, updateCurso, createCurso};