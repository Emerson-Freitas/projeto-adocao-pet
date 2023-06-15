import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {
            type: String, 
            required: [true, "O nome do usuário(a) é obrigatório"]
        },
        email: {
            type: String, 
            required: [true, "O email do usuário(a) é obrigatório"]
        },
        senha: {
            type: String, 
            required: [true, "A senha do usuário(a) é obrigatória"]
        }
    }
)

const tutores = mongoose.model('tutores', tutorSchema);

export default tutores;
