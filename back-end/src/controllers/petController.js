import pets from '../models/pet.js';

class PetController {
    
    static cadastrar = async (req, res) => {
        try {
            const pet = await new pets(req.body);
            const petResultado = await pet.save();

            res.status(201).json(petResultado);
        } catch (err) {
            console.log(err);
            res.status(500).json({message: `Erro ao cadastrar o pet | ${err}`})
        }
    }

    static listarTodos = async (req, res) => {
        try {
            const resultado = await pets.find()
            .populate('abrigo')
            .exec();

            if(resultado.length === 0) {
                return res.status(404).json({message: 'Não encontrado'})
            }

            res.status(200).json(resultado);
        } catch (err) {
            console.log(err);
            res.status(500).json({message: `Erro ao consultar todos os pets | ${err}`})
        }
    }

    static listarPetPorId = async (req, res) => {
        try {
            const {id} = req.params;
            const resultado = await pets.findById(id);

            res.status(200).json(resultado);
        } catch (err) {
            console.log(err);
            res.status(404).json({message: 'Não encontrado'})
        }
    }

    static atualizarPet = async (req, res) => {
        try {
            const { id } = req.params;
            const petAtualizado = await pets.findByIdAndUpdate(id, {$set: req.body}, {new: true});
            if(!petAtualizado) {
                return res.status(404).json({message: 'Pet não encontrado'});
            }

            res.status(200).json(petAtualizado);
        } catch (err) {
            console.log(err)
            res.status(500).json({message: `Erro ao atualizar os dados do pet`})
        }
    }

    static deletarPetById = async (req, res) => {
        try {
            const { id } = req.params;
            await pets.findByIdAndDelete(id);

            res.status(200).json({message: `Pet com o id: ${id} foi deletado com sucesso!`});
        } catch (err) {
            console.log(err);
            res.status(500).json({message: `Erro ao deletar pet: ${id} | ${err}`})
        }
    }
}

export default PetController;