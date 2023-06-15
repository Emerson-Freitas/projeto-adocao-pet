import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:pet-adocao-projeto@alura.l4yysga.mongodb.net/projeto-adocao-pet");
const db = mongoose.connection;

export default db;