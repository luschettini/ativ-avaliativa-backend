CREATE DATABASE cursosdb;

\c cursosdb;


CREATE TABLE instrutor (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    photo TEXT
);

CREATE TABLE curso (
    id SERIAL PRIMARY KEY,
    name Varchar(100) NOT NULL,
    descricao TEXT NOT NULL,
    instrutor_id INTEGER REFERENCES instrutor(id) ON DELETE CASCADE
);

INSERT INTO instrutor (name, email, photo ) VALUES 
('Dra. Luiza Nicoluci', 'lu.nicoluci@gmail.com', NULL),
('Dra. Heloísa Damazio', 'helo.damazio@gmail.com', NULL),
('Dra. Clara Rabello', 'clara.rabello@gmail.com', NULL),
('Dra. Ana Júlia Demattei', 'anaju.demattei@gmail.com', NULL);

INSERT INTO curso (name, descricao, curso_id) VALUES
('Curso de Fonoaudiologia', 'Curso de Fonoaudiologia com ênfase em Linguística', 1),
('Curso de Medicina', 'Curso de Medicina com ênfase em Cirurgia', 2),
('Curso de Terapia Ocupacional', 'Curso de Terapia Ocupacional com ênfase em Pediatria', 3),
('Curso de Fisioterapia', 'Curso de Fisioterapia com ênfase em Reabilitação', 4),
('Curso de Fonoaudiologia', 'Curso de Fonoaudiologia com ênfase em Processamento Auditivo', 1),
('Curso de Medicina', 'Curso de Medicina com ênfase em Cardiologia', 2),
('Curso de Terapia Ocupacional', 'Curso de Terapia Ocupacional com ênfase em Saúde Mental', 3),
('Curso de Fisioterapia', 'Curso de Fisioterapia com ênfase em Reabilitação Neurológica', 4),




