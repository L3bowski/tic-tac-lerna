import express from 'express';
import { getGrids } from 'tic-tac-lerna-grid';

const startServer = (publicFolderPath: string) => {
    const port = 5000;
    const server = express();

    server.use(express.static(publicFolderPath));

    server.use(/^\/grids$/, (req, res, next) => {
        return res.send(JSON.stringify(getGrids()));
    });

    server.listen(port, (error: any) => {
        console.log(error || `Sever running in port ${port}`)
    });
}

export {
    startServer
};
