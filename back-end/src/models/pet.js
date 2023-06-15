import mongoose from "mongoose";

const petSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {
            type: String,
            required: [true, 'O nome/apelido do pet é obrigatório']
        },
        idade: {
            type: Number,
            required: [true, 'A idade do pet é obrigatória']
        },
        porte:
            {
                type: String,
                required: [true, 'O porte do pet é obrigatório'],
                enum: ['Grande', 'Medio', 'Pequeno', 'Medio/Grande', 'Pequeno/Medio']
            },
        caracteristicas: {type: String},
        abrigo: {
            type: mongoose.Schema.Types.ObjectId, ref: 'abrigos',
            required: [true, "O abrigo do pet é obrigatório"]
        }
    }
)

const pets = mongoose.model('pets', petSchema)

export default pets;