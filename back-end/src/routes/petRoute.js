import express from 'express';
import PetController from '../controllers/petController.js';

const router = express.Router();

router
    .get('/pets', PetController.listarTodos)
    .get('/pets/:id', PetController.listarPetPorId)
    .post('/pets', PetController.cadastrar)
    .put('/pets/:id', PetController.atualizarPet)
    .delete('/pets/:id', PetController.deletarPetById)

export default router;