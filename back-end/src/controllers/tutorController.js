import tutores from "../models/tutor.js";

class TutorController {

    static listarTodos = async (req, res) => {
        try {
            const resultado = await tutores.find();
            if(resultado.length === 0) {
                res.status(404).json({message: "Não encontrado"});
            }

            res.status(200).json(resultado);
        } catch (err) {
            console.log(err)
            res.status(500).json(`Erro ao consultar os tutores | ${err}`);
        }
    }

    static listarPorId = async (req, res) => {
        try {
            const { id } = req.params;
            const resultado = await tutores.findById(id);

            res.status(200).json(resultado);
        } catch (err) {
            const { id } = req.params;
            res.status(404).json({message: `Tutor com o id ${id} não foi encontrada`})
            console.log(err);
        }
    }

    static cadastrarTutor = async (req, res) => {
        try {
            const tutor = await new tutores(req.body);
            const tutorResultado = await tutor.save();

            res.status(201).json(tutorResultado);
        } catch (err) {
            res.status(400).json({message: "Por favor, verifique se todos os campos foram informados corretamente!"});
            console.log(err);
        }
    }

    static deletarPorId = async (req, res) => {
        try {
            const { id } = req.params;
            await tutores.findOneAndDelete(id);

            res.status(200).json({message: `Tutor com o id ${id} foi deletada com sucesso!`})
        } catch (err) {
            const { id } = req.params;
            res.status(500).json({message: `Erro ao deletar o Tutor com o id ${id} | ${err}`})
            console.log(err);
        }
    }

    static atualizarPorId = async (req, res) => {
        try {
            const { id } = req.params;
            await tutores.findByIdAndUpdate(id, {$set: req.body});
            const tutorAtualizado = await tutores.findById(id);
            
            res.status(200).json(tutorAtualizado);
        } catch (err) {
            const { id } = req.params;
            res.status(500).json({message: `Falha ao atualizar os dados do Tutor com o id ${id} | ${err}`})
            console.log(err)
        }
    }
}

export default TutorController;