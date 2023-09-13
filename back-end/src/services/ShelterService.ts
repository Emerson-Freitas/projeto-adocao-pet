import prismaClient from "../prisma";
import ICreateShelter from "../interfaces/shelter/ICreateShelter";
import IDetailShelter from "../interfaces/shelter/IDetailShelter";
import IUpdateShelter from "../interfaces/shelter/IUpdateShelter";

class ShelterService {
    async createShelter({name, location}: ICreateShelter) {
        
        if(!name){
            throw new Error('O nome do abrigo é obrigatório')
        }
        if(!location){
            throw new Error('A localização do abrigo é obrigatório')
        }

        const shelter = await prismaClient.shelter.create({
            data: {
                name: name,
                location: location
            }
        })

        return shelter
    }

    async shelterDetail({ id }: IDetailShelter){
        const shelter = await prismaClient.shelter.findFirst({
            where: {
                id: id
            }
        })

        return shelter
    }

    async updateShelter(id: string, data: IUpdateShelter){

        const updatedShelter = await prismaClient.shelter.update({
            where: {
              id: id,
            },
            data: data
        })

        return updatedShelter
    }

    async findShelters(){
        const shelters = await prismaClient.shelter.findMany();
        return shelters
    }

    async deleteShelter(id: string){
        if(!id){
            throw new Error("Por favor, informe o id do abrigo que deseja excluir!")
        }
        const deleteShelter = await prismaClient.shelter.delete({
            where: {
                id: id
            }
        })

        return deleteShelter
    }
}

export default ShelterService