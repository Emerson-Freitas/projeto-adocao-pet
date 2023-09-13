import express, { Request, Response } from 'express'
import cors from 'cors'
import router from './routes';

const app = express();

app.use(express.json())
app.use(cors())

app.use(router)

const port: string | number = 3000 || process.env.PORT

app.listen(port, () => console.log(`Server listen: ${port}`))

router.get('/teste', () => console.log('ola mundo'))