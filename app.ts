import express from "express";
import cors from 'cors';

const app = express();

export type PORT = 2000 | 5000 | 10000;

const port: PORT = 2000;

app.use(cors());

app.get('/api', (req, res) => {
    res.send('i heard there was a button here')
})

app.get('/', (req, res) => {
    res.send('hallo')
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})