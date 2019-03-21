import express from 'express';
import bodyParser from 'body-parser';
import { question } from './routes';

const app = express();

// lee todo lo que viene el json y utf-8 del cliente
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', POST, GET, PATCH, DELETE, OPTIONS)
    next()
  })
}
//app.get('/', (req, res) => res.send('Hola desde expres'))

app.use('/api/question', question);



export default app;
