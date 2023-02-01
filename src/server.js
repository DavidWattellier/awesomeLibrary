const express = require('express');

const server = express();

server.use(express.json());

const knex = require("./knex");



const setupServer = () => {

server.get('/books', async (req, res) => {
    const allBooks = await knex
    .select('*')
    .from('books');
    console.log(allBooks);
    res.status(200).send(allBooks);
})

return server;

}


module.exports = { setupServer };