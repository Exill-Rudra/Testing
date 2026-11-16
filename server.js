// Starts the site on your computer: `npm start`, then open http://localhost:8080
import http from 'node:http';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {route} from './src/router.js';

const publicDir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'public');
const port = Number(process.env.PORT) || 8080;

http.createServer(async (req, res) => {
  const out = await route(new URL(req.url, 'http://localhost').pathname, {publicDir});
  res.writeHead(out.status, {'content-type': out.type});
  res.end(out.body);
}).listen(port, () => console.log(`Fieldwork Coffee is running at http://localhost:${port}`));
