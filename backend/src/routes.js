const { Router } = require('express');
const SharehdController = require('./controllers/SharehdController');

const routes = Router();

routes.get('/sharehd', SharehdController.index);
routes.post('/sharehd', SharehdController.store);

module.exports = routes;