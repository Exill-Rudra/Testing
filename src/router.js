// Decides what the server answers for an address. No sockets here, so it is easy to test.
import {readFile} from 'node:fs/promises';
import path from 'node:path';

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
};
const TEXT = 'text/plain; charset=utf-8';

/** @returns {status, type, body} for a path such as "/" or "/styles.css" */
export async function route(pathname, {publicDir}) {
  let rel;
  try { rel = decodeURIComponent(pathname); } catch { return {status: 400, type: TEXT, body: 'Bad request'}; }
  if (rel.endsWith('/')) rel += 'index.html';
  const file = path.join(publicDir, rel);
  if (!file.startsWith(publicDir + path.sep)) return {status: 403, type: TEXT, body: 'Forbidden'};
  try {
    return {status: 200, type: TYPES[path.extname(file)] ?? 'application/octet-stream', body: await readFile(file)};
  } catch {
    return {status: 404, type: TEXT, body: 'Not found'};
  }
}
