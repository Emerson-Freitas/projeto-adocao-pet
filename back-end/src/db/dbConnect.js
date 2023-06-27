import mongoose from "mongoose";

mongoose.connect("mongodb+srv://projeto-adocao-pet:pet-adocao-projeto@cluster0.sq0leac.mongodb.net/projeto-adocao-pet");
const db = mongoose.connection;

export default db;