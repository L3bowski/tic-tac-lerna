import { join } from 'path';
import { startServer } from 'tic-tac-lerna-main';

const publicFolderPath = join(__dirname, '..', 'node_modules', 'tic-tac-lerna-main', 'public');
startServer(publicFolderPath);