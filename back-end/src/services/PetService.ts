import ICreatePet from "../interfaces/pets/ICreatePet";
import IDetailPet from "../interfaces/pets/IDetailPet";
import IUpdatePet from "../interfaces/pets/IUpdatePet";
import prismaClient from "../prisma";

class PetService{

    static validationCreatePet = ({name, age, characteristics, shelter_id} : ICreatePet): boolean | Error => {
        if(!name){
            throw new Error("O nome do pet é obrigatório")
        }
        if(!age){
            throw new Error("A idade do pet é obrigatória")
        }
        if(!characteristics){
            throw new Error("As características do pet são obrigatórias")
        }
        if(!shelter_id){
            throw new Error("O id do abrigo é obrigatório")
        }

        return true
    }
    async createPet({name, age, characteristics, shelter_id } : ICreatePet ){
        
        const isValid = PetService.validationCreatePet({name, age, characteristics, shelter_id})

        if(!isValid){
            return isValid
        }
        
        const pet = await prismaClient.pet.create({
            data: {
                name: name,
                age: age,
                characteristics: characteristics,
                shelter_id: shelter_id
            }
        })

        return pet
    }

    async detailPet({id} : IDetailPet){
        if(!id){
            throw new Error("Por favor, informe o id do pet")
        }

        const pet = await prismaClient.pet.findFirst({
            where: {
                id: id
            }
        })

        return pet
    }

    async findPets(){
        const pets = await prismaClient.pet.findMany()
        return pets
    }

    async deletePet(id : string){

        console.log('id delete', id)
        if(!id){
            throw new Error("Por favor, informe o id do pet que deseja deletar")
        }

        const pet = await prismaClient.pet.delete({
            where: {
                id: id
            }
        })

        return pet
    }

    async updatePet(id: string, data: IUpdatePet){
        const pet = await prismaClient.pet.update({
            where: {
                id: id
            },
            data: data
        })

        return pet
    }
}

export default PetService