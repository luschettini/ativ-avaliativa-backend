const pool = require("../config/database");

const getInstrutores = async () => {
    const result = await pool.query("SELECT * FROM instrutor");
    return result.rows;
};

const getInstrutoresById = async (id) => {
    const result = await pool.query("SELECT * FROM instrutor WHERE id = $1", [id]);
    return result.rows[0];
};

const createInstrutor = async (name, email, experiencia) => {
    const result = await pool.query(
        "INSERT INTO instrutor (name, email, experiencia) VALUES ($1, $2, $3) RETURNING *",
        [name, email, experiencia]
    );
    return result.rows[0];
};

const updateInstrutor = async (id, name, email, experiencia) => {
    const result = await pool.query(
        "UPDATE instrutor SET name = $1, email = $2, experiencia = $3 WHERE id = $4 RETURNING *",
        [name, email, experiencia, id]
    );
    return result.rows[0];
};

const deleteInstrutor = async (id) => {
    const result = await pool.query("DELETE FROM instrutor WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Instrutor não encontrado." };
    }
    return { message: "Instrutor deletado com sucesso." };
};

module.exports = { getInstrutores, getInstrutoresById, createInstrutor, updateInstrutor, deleteInstrutor };