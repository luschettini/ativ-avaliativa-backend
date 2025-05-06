const InstrutorModel = require('../models/instrutorModel');

const getAllInstrutores = async (req, res) => {
    try {
        const instrutores = await InstrutorModel.getInstrutores();
        res.json(instrutores) 
    } catch (error) {
        console.error('Erro ao buscar instrutor:', error);
        res.status(500).json({ error: 'Erro ao buscar instrutores.' });
    }
}

const getInstrutorById = async (req, res) => {
    try {
        const instrutor = await InstrutorModel.getInstrutoresById(req.params.id);
        if (!instrutor) {
            return res.status(404).json({ error: 'Instrutor não encontrado.' });
        }
        res.json(instrutor);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar instrutor.' });
    }
}
const createInstrutor = async (req, res) => {
    try {
        const { name, email, experiencia } = req.body;
        const newInstrutor = await InstrutorModel.createInstrutor( name, email, experiencia);
        res.status(201).json(newInstrutor);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar instrutor.' });
        
    }
}

const updateInstrutor = async (req, res) => {
    try {
        const { name, email, experiencia } = req.body;  
        const instrutor = await InstrutorModel.updateInstrutor(req.params.id, name, email, experiencia);
        if (!instrutor) {
            return res.status(404).json({ error: 'Instrutor não encontrado.' });
        }
        res.json(instrutor);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao editar instrutor.' });
    }
};

const deleteInstrutor = async (req, res) => {
    try {
        const result = await InstrutorModel.deleteInstrutor(req.params.id);
        if (result.error) {
            return res.status(404).json(result);
        }
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar Instrutor.' });
    }
}

module.exports = { getAllInstrutores, getInstrutorById, createInstrutor, updateInstrutor, deleteInstrutor };