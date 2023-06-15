import mongoose from "mongoose";

const abrigoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {
            type: String,
            required: [true, 'O nome do abrigo é obrigatório']
        },
        localizacao: {
            type: String,
            required: [true, 'A localização do abrigo é obrigatório']
        }
    }
)

const abrigos = mongoose.model('abrigos', abrigoSchema);

export default abrigos;