const express = require('express');

const port = 4000;
const server = express();

server.use(express.static('public'));

server.use(/^\/grids$/, (req, res, next) => {
    return res.send(JSON.stringify([]));
});

server.listen(port, (error) => {
    console.log(error || `Sever running in port ${port}`)
})