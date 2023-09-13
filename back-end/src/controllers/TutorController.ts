import { Request, Response } from "express"
import TutorService from "../services/TutorService";

class TutorController{
    static async createTutor(req: Request, res: Response){
        const data = req.body;
        const tutorService = new TutorService()
        const tutor = await tutorService.createTutor(data)

        return res.json(tutor)
    }    

    static async detailTutor(req: Request, res: Response){
        const { id } = req.params
        const tutorService = new TutorService()
        const tutor = await tutorService.detailTutor(id)

        return res.json(tutor)
    }

    static async findTutors(req: Request, res: Response){
        const tutorService = new TutorService()
        const tutor = await tutorService.findTutors();

        return res.json(tutor)
    }

    static async updateTutor(req: Request, res: Response){
        const id = req.params.id
        const data = req.body
        const tutorService = new TutorService()
        const tutor = await tutorService.updateTutor(id, data);

        return res.json(tutor)
    }

    static async deleteTutor(req: Request, res: Response){
        const { id } = req.params
        const tutorService = new TutorService()
        const tutor = await tutorService.deleteTutor(id)

        return res.json(tutor)
    }
}

export default TutorController