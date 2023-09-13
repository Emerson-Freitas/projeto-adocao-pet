import { Request, Response } from "express"
import PetService from "../services/PetService"

class PetController{
    static async createPet(req: Request, res: Response){
        const { name, age, characteristics, shelter_id} = req.body;
        const petService = new PetService();

        const pet = await petService.createPet({name, age, characteristics, shelter_id})

        return res.json(pet)
    }

    static async detailPet(req: Request, res:Response){
        const { id } = req.params

        const petService = new PetService();
        const pet = await petService.detailPet({id})

        return res.json(pet)

    }

    static async deletePet(req: Request, res: Response){
        const { id }  = req.params
        const petService = new PetService();

        const pet = await petService.deletePet(id);

        return res.json(pet)
    }

    static async updatePet(req: Request, res: Response){
        const id = req.params.id as string
        const data = req.body
        const petService = new PetService();

        const pet = await petService.updatePet(id, data);

        return res.json(pet)
    }

    static async findPets(req: Request, res: Response){
        const petService = new PetService();
        const pets = await petService.findPets();

        return res.json(pets)
    }
}

export default PetController