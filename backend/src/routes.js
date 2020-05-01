const express = require('express');
const EstabelecimentoController = require('./controllers/EstabelecimentoController');
const ProdutoController = require('./controllers/ProdutoController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create );

routes.get('/estabelecimentos', EstabelecimentoController.index);
routes.post('/estabelecimentos', EstabelecimentoController.create);

routes.get('/profile', ProfileController.index);

routes.post('/produtos', ProdutoController.create);
routes.get('/produtos', ProdutoController.index);
routes.delete('/produtos/:id', ProdutoController.delete);

module.exports = routes;