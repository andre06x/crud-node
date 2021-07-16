import express from'express';

import { Post } from'./controllers/Post';
import { Select } from'./controllers/Select';
import { Update } from'./controllers/Update';
import { Delete } from'./controllers/Delete';

import { userExists } from './services/UserExists';

const routes = express.Router();

const post = new Post();
const select = new Select();
const update = new Update();
const deleteController = new Delete();


routes.post('/',userExists, post.create);

routes.put('/alterar-nome/:id', update.nome);

routes.delete('/deletar/:id', deleteController.deleteId)

routes.get('/', select.tudo);
routes.get('/email/:email', select.email);
routes.get('/usuario/:id', select.usuarioId);
routes.get('/genero/:genero', select.genero);
routes.get('/entredatas/:primeiraData/:segundaData', select.entreDatas)
routes.get('/genero-criacao/:genero/:data', select.generoCriacao)
routes.get('/ultimo', select.ultimo)

routes.get('/teste', (request, response) => {
  let name = request.query['nome']

  response.json(name)
})


export { routes }
