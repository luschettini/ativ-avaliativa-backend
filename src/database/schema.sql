CREATE DATABASE cursodb;

\c cursodb;

CREATE TABLE instrutor (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    experiencia VARCHAR(255) NOT NULL
);

CREATE TABLE curso (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    instrutor_id INTEGER REFERENCES instrutor(id) ON DELETE CASCADE,
    photo TEXT
);

INSERT INTO instrutor (name, email, experiencia) VALUES 
('Dra. Luiza Nicoluci', 'lu.nicoluci@gmail.com', 'Especialista em Linguística'),
('Dra. Heloísa Damazio', 'helo.damazio@gmail.com', 'Cirurgiã Geral'),
('Dra. Clara Rabello', 'clara.rabello@gmail.com', 'Especialista em Pediatria'),
('Dra. Ana Júlia Demattei', 'anaju.demattei@gmail.com', 'Especialista em Reabilitação Neurológica');

INSERT INTO curso (name, descricao, instrutor_id) VALUES
('Curso de Fonoaudiologia', 'Curso de Fonoaudiologia com ênfase em Linguística', 1),
('Curso de Medicina', 'Curso de Medicina com ênfase em Cirurgia', 2),
('Curso de Terapia Ocupacional', 'Curso de Terapia Ocupacional com ênfase em Pediatria', 3),
('Curso de Fisioterapia', 'Curso de Fisioterapia com ênfase em Reabilitação', 4),
('Curso de Fonoaudiologia', 'Curso de Fonoaudiologia com ênfase em Processamento Auditivo', 1),
('Curso de Medicina', 'Curso de Medicina com ênfase em Cardiologia', 2),
('Curso de Terapia Ocupacional', 'Curso de Terapia Ocupacional com ênfase em Saúde Mental', 3),
('Curso de Fisioterapia', 'Curso de Fisioterapia com ênfase em Reabilitação Neurológica', 4);