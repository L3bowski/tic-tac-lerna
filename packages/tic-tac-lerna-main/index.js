const express = require('express');
const { getGrids } = require('tic-tac-lerna-grid');

const port = 4000;
const server = express();

server.use(express.static('public'));

server.use(/^\/grids$/, (req, res, next) => {
    return res.send(JSON.stringify(getGrids()));
});

server.listen(port, (error) => {
    console.log(error || `Sever running in port ${port}`)
})