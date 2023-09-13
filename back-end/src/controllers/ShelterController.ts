import IDetailShelter from "../interfaces/shelter/IDetailShelter";
import prismaClient from "../prisma";
import ShelterService from "../services/ShelterService";
import { Request, Response } from "express";

class ShelterController{
    static async createShelter(req: Request, res: Response){
        const { name, location } = req.body;

        const shelterService = new ShelterService();
        const shelter = await shelterService.createShelter({
            name,
            location
        })
        
        return res.json(shelter)
    }

    static async findShelters(req: Request, res: Response){
        const shelterService = new ShelterService();
        const shelters = await shelterService.findShelters();

        return res.json(shelters)
    }

    static async shelterDetail(req: Request, res: Response){
        const { id } = req.params

        const shelterService = new ShelterService();
        const shelter = await shelterService.shelterDetail({id})

        return res.json(shelter)
    }

    static async updateShelter(req: Request, res: Response){
        const id = req.params.id as string
        const data = req.body
        const shelterService = new ShelterService();
       
        const shelter = await shelterService.updateShelter(id, data)

        return res.json(shelter)
    }

    static async deleteShelter(req: Request, res: Response){
        const id = req.params.id as string
        const shelterService = new ShelterService();
        const shelter = await shelterService.deleteShelter(id)

        return res.json(shelter)
    }
}

export default ShelterController