import http from 'http';
import Debug from 'debug';
import app from './app';


const PORT = 3000;
const debug = new Debug ('app-party:root');

/*
const app = http.createServer((req, res)=> {
  debug('New request');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hola index server app-party');
  res.end();
})
*/

app.listen(PORT, () => {
  debug(`Server running at por ${PORT}`);
})
