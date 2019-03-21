import express from 'express';

const app = express.Router();

const question = {
  id: 1,
  title:'¿pregunta?',
  description: 'respuesta de la pregunta',
  createdAt: new Date(),
  icon: 'devicon-android-plain',
  answers: [],
  user: {
    firstName: 'Usuario',
    lastName: 'Guest',
    email: 'usuario@usuario.com',
    password: 'usuario',
  }
}
const questions = new Array(10).fill(question);

// api/questions
app.get('/', (req, res) => res.status(200).json(questions));

/*
app.get('/', (req, res) => {
  setTimeout(() => {
    res.status(200).json(questions)
  }, 2000)
});
*/

// api/questions: id
//app.get('/:id', (req, res) => res.status(200).json(question));
app.get('/:id', (req, res) => {
  const { id } = req.params
  //const q = question.find(question => question.id = +id )
  const q = question.find(({ id }) => id === +id)
  res.status(200).json(q)
});


// POST api/questions

app.post('/', (req, res) => {
  const question = req.body
  question.id = +new Date()
  question.user = {
    firstName: 'Usuario',
    lastName: 'Guest',
    email: 'usuario@usuario.com',
    password: 'usuario',
  }
  question.createdAt = new Date()
  question.answers = []
  question.push(question)
  res.status(200).json(question)

});


export default app;
