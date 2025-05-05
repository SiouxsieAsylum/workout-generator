import express from "express";
import cors from 'cors';
import { PORT } from "./config/models";
import { generateWorkout } from "./src/service";

const app = express();

const port: PORT = 2000;

app.use(cors());
app.use(express.json())

app.post('/api/workout', (req, res) => {
    console.log(req.body)
    res.json(generateWorkout(req.body.bodyPart))
})

app.get('/api', (req, res) => {
    res.send('i heard there was a button here')
})

app.get('/', (req, res) => {
    res.send('hallo')
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})