CREATE DATABASE cursosdb;

\c cursosdb;

CREATE TABLE cursos (
    id SERIAL PRIMARY KEY,
    nome Varchar(100) NOT NULL,
    descricao TEXT NOT NULL,
    photo TEXT NOT NULL
);

CREATE TABLE instrutores (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    cursos_id INTEGER REFERENCES cursos(id) ON DELETE CASCADE
    
)