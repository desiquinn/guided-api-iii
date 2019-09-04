const express = require('express');

const productsRouter = require('../products/products-router');
const suppliersRouter = require('../suppliers/suppliers-router');

const server = express();

//middleware
server.use(express.json());

server.use('/products', productsRouter);
server.use('/suppliers', suppliersRouter);


server.get('/', (req, res) => {
    res.status(200).json({api: 'up'})
});

server.get('/clients', (req,res) => {});

module.exports=server;