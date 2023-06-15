import abrigos from "../models/abrigo.js";

class abrigoController {

    static cadastrar = async (req, res) => {
        try {
            const abrigo = await new abrigos(req.body);
            const abrigoResultado = await abrigo.save();

            const { _id, nome, localizacao } = abrigoResultado;
            res.status(201).json({_id, nome, localizacao})
        } catch (err) {
            res.status(400).json({message: "Por favor, verifique se todos os campos foram informados corretamente!"});
            console.log(err);
        }
    }

    static listarAbrigoPorId = async (req, res) => {
        try {
            const {id} = req.params;
            const abrigoResultado = await abrigos.findById(id);
            res.status(200).json(abrigoResultado);
        } catch (err) {
            console.log(err);
            const {id} = req.params;
            res.status(404).json({message: `Erro ao consultar o abrigo ${id} | ${err}`})
        }
    }

    static listarTodosAbrigos = async (req, res) => {
        try {
            const resultado = await abrigos.find();
            if(resultado.length === 0) {
                return res.status(404).json({message: 'Não encontrado'})
            }
            res.status(200).json(resultado);
        } catch (err) {
            console.log(err)
            res.status(500).json({message: `Erro ao listar abrigos | ${err}`})
            
        }
    }

    static atualizarAbrigo = async (req, res) => {
        try {
            const { id } = req.params;
            const abrigoAtualizado = await abrigos.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        
            if(!abrigoAtualizado) {
                return res.status(404).json({message: 'Abrigo não encontrado'});
            }
    
            res.status(200).json(abrigoAtualizado);
        } catch (err) {
            console.log(err);
            res.status(500).json({message: `Erro ao atualizar o abrigo: ${id} | ${err}`})
        }
    }

    static deletarAbrigo = async (req, res) => {
        try {
            const { id } = req.params;
            await abrigos.findOneAndDelete(id);

            res.status(200).json({message: `Abrigo com o id ${id} foi deletado com sucesso`})
        } catch (err) {
            console.log(err);
            res.status(500).json({message: `Erro ao deletar o abrigo | ${err}`});
            
        }
    }

    static deletarTodosAbrigos = async (req, res) => {
        try {
            await abrigos.deleteMany({});
            res.status(200).json({message: "Todos registros foram deletados com sucesso!"});
        } catch (err) {
            console.log(err);
            res.status(500).json({message: `Erro ao deletar os todos os abrigos | ${err}`});
        }
    }
}

export default abrigoController;