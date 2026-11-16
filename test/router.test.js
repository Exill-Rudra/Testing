import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {route} from '../src/router.js';

const publicDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');

test('the home page is served at "/"', async () => {
  const out = await route('/', {publicDir});
  assert.equal(out.status, 200);
  assert.match(out.type, /text\/html/);
  assert.match(out.body.toString(), /Fieldwork Coffee/);
});

test('stylesheets and scripts get the right content type', async () => {
  assert.match((await route('/styles.css', {publicDir})).type, /text\/css/);
  assert.match((await route('/js/app.js', {publicDir})).type, /javascript/);
});

test('an address that does not exist is a 404', async () => {
  assert.equal((await route('/nothing-here', {publicDir})).status, 404);
});

test('a path that tries to leave the public folder is refused', async () => {
  assert.equal((await route('/../package.json', {publicDir})).status, 403);
});
