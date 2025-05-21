const pool = require("../config/database");

const getCursos = async (name) => {
    if (!name) {
        const result = await pool.query(`
            SELECT curso.*, instrutor.name AS instrutor_name FROM curso LEFT JOIN instrutor ON curso.instrutor_id = instrutor.id`);
        return result.rows;
    } else {
        const result = await pool.query(`
            SELECT curso.*, instrutor.name AS instrutor_name FROM curso LEFT JOIN instrutor ON curso.instrutor_id = instrutor.id WHERE curso.name ILIKE $1`, [`%${name}%`]);
        return result.rows;
    }
};

const getCursosById = async (id) => {
    const result = await pool.query(
        "SELECT curso.*, instrutor.name AS instrutor_name FROM curso LEFT JOIN instrutor ON curso.instrutor_id = instrutor.id WHERE curso.id = $1", [id]);
    return result.rows[0];
};

const createCurso = async (name, descricao, instrutor_id, photo = null) => {
    const result = await pool.query(`
        INSERT INTO curso (name, descricao, instrutor_id, photo) VALUES ($1, $2, $3, $4) RETURNING *`, [name, descricao, instrutor_id, photo]);
    return result.rows[0];
};

const updateCursos = async (id, name, descricao, instrutor_id) => {
    const result = await pool.query(`
        UPDATE curso SET name = $1, descricao = $2, instrutor_id = $3 WHERE id = $4 RETURNING *`, [name, descricao, instrutor_id, id]);
    return result.rows[0];
};

const deleteCursos = async (id) => {
    const result = await pool.query(`
        DELETE FROM curso WHERE id = $1 RETURNING *`, [id]);
    if (result.rowCount === 0) {
        return { error: "Curso não encontrado." };
    }
    return { message: "Curso deletado com sucesso." };
};

module.exports = { getCursos, getCursosById, createCurso, updateCursos, deleteCursos };