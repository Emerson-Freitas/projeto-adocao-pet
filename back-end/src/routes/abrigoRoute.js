import express from 'express';
import abrigoController from '../controllers/abrigoController.js';

const router = express.Router();

router
    .get('/abrigos', abrigoController.listarTodosAbrigos)
    .get('/abrigos/:id', abrigoController.listarAbrigoPorId)
    .post('/abrigos', abrigoController.cadastrar)
    .put('/abrigos/:id', abrigoController.atualizarAbrigo)
    .delete('/abrigos/:id', abrigoController.deletarAbrigo)
    .delete('/abrigos', abrigoController.deletarTodosAbrigos)

export default router;