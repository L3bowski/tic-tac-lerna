import path from 'path';
import { startServer } from 'tic-tac-lerna-main';

const publicFolderPath = path.join(__dirname, '..', 'node_modules', 'tic-tac-lerna-main', 'public');
startServer(publicFolderPath);

console.log('Irrelevant change to test Lerna independent versioning');