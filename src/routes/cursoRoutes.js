const express = require('express');
const router = express.Router();
const cursoController = require("../controllers/cursoController");
const apiKeyMiddleware = require("../config/apiKey"); // 🔐
router.use(apiKeyMiddleware); // 🔒 Protege todas as rotas

router.get("/curso", cursoController.getAllCursos);
router.get("/curso/:id", cursoController.getCursoById);
router.post("/curso", cursoController.createCurso);
router.put("/curso/:id", cursoController.updateCurso);
router.delete("/curso/:id", cursoController.deleteCurso);

module.exports = router;