const express = require('express');

const recipeRouter = require('./recipes/recipesRouter.js');

const server = express();

server.use(express.json());
server.use('/recipes', recipesRouter);

module.exports = server;