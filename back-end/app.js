import express from 'express';
import db from './src/db/dbConnect.js';
import routes from './src/routes/index.js';
import cors from 'cors';

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log(`Conexão com o banco de dados ${db.name} realizada com sucesso!`);
})

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
routes(app);

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`)
})

export default app