const express = require('express');
const routes = express.Router();

const controller = require('../controllers/product-controller');

routes.get('/ask', controller.getProductsByName);

module.exports = routes;
