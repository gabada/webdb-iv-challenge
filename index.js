const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const port = 5000;

server.use(express.json());
server.use(cors());
server.use(helmet());

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
