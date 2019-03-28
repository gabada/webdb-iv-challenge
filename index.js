const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const port = 5000;

const dishesRouter = require('./dishes/dishes-router.js');
const recipesRouter = require('./recipes/recipes-router.js');

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
