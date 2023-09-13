import { Router } from "express";
import ShelterController from "./src/controllers/ShelterController";
import PetController from "./src/controllers/PetController";
import TutorController from "./src/controllers/TutorController";

const router = Router();

// routes shoulter
router.get('/shelter', ShelterController.findShelters)
router.get('/shelter/:id', ShelterController.shelterDetail)
router.post('/shelter', ShelterController.createShelter)
router.put('/shelter/:id', ShelterController.updateShelter)
router.delete('/shelter/:id', ShelterController.deleteShelter)

//routes pets
router.get('/pets', PetController.findPets)
router.get('/pets/:id', PetController.detailPet)
router.post('/pets', PetController.createPet)
router.put('/pets/:id', PetController.updatePet)
router.delete('/pets/:id', PetController.deletePet)

//routes tutor
router.get('/tutors', TutorController.findTutors)
router.get('/tutors/:id', TutorController.detailTutor)
router.post('/tutors', TutorController.createTutor)
router.delete('/tutors/:id', TutorController.deleteTutor)
router.put('/tutors/:id', TutorController.updateTutor)

export default router