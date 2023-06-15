import express from 'express';
import PessoaController from '../controllers/tutorController.js';

const router = express.Router();

router
    .get('/tutores', PessoaController.listarTodos)
    .get('/tutores/:id', PessoaController.listarPorId)
    .post('/tutores', PessoaController.cadastrarTutor)
    .delete('/tutores/:id', PessoaController.deletarPorId)
    .put('/tutores/:id', PessoaController.atualizarPorId);
    
export default router;