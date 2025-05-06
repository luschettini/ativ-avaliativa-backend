const express = require('express');
const router = express.Router();
const instrutorController = require('../controllers/instrutorController.js');
const upload = require("../config/upload.js");
const apiKeyMiddleware = require("../config/apiKey.js"); // 🔐
router.use(apiKeyMiddleware); // 🔒 Protege todas as rotas

router.get('/instrutor/', instrutorController.getAllInstrutores);
router.get('/instrutor/:id', instrutorController.getInstrutorById);
router.post('/instrutor/', upload.single("photo"), instrutorController.createInstrutor);
router.put('/instrutor/:id', instrutorController.updateInstrutor);
router.delete('/instrutor/:id', instrutorController.deleteInstrutor);

module.exports = router;