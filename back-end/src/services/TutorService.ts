import ICreateTutor from "../interfaces/tutors/ICreateTutor"
import IUpdateTutor from "../interfaces/tutors/IUpdateTutor"
import prismaClient from "../prisma"
import { hash } from "bcryptjs"

class TutorService{
    async createTutor({name, email, password}: ICreateTutor){
        if(!email){
            throw new Error("O email é obrigatório")
        }

        const exists = await prismaClient.tutor.findFirst({
            where: {
                email: email
            }
        })

        if(exists){
            throw new Error(`O email ${email} já foi cadastrado`)
        }

        const hashPassword = await hash(password, 8)

        const user = await prismaClient.tutor.create({
            data: {
                name: name,
                email: email,
                password: hashPassword
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user
    }

    async updateTutor(id: string, data: IUpdateTutor){
        if(!id){
            throw new Error("Por favor, informe o id do tutor")
        }
        const tutor = await prismaClient.tutor.update({
            where: {
                id: id
            },
            data: data,
            select:{
                id: true,
                name: true,
                email: true
            }
        })

        return tutor
    }

    

    async detailTutor(id: string){
        if(!id){
            throw new Error("Por favor, informe o id do tutor")
        }
        const tutor = await prismaClient.tutor.findFirst({
            where: {
                id: id
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })

        return tutor
    }

    async deleteTutor(id: string){
        if(!id){
            throw new Error("Por favor, informe o id do tutor")
        }
        const tutor = await prismaClient.tutor.delete({
            where: {
                id: id
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })

        return tutor
    }

    async findTutors(){
        const tutors = await prismaClient.tutor.findMany({
            select: {
                id: true,
                name: true,
                email: true
            }
        })
        return tutors
    }
}

export default TutorService