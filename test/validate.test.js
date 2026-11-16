import test from 'node:test';
import assert from 'node:assert/strict';
import {isValidEmail, cleanName} from '../public/js/validate.js';

test('a normal email is accepted', () => {
  assert.equal(isValidEmail('sam@fieldwork.coffee'), true);
  assert.equal(isValidEmail('sam.lee+news@example.com'), true);
});

test('empty or missing values are rejected', () => {
  assert.equal(isValidEmail(''), false);
  assert.equal(isValidEmail(null), false);
  assert.equal(isValidEmail(undefined), false);
  assert.equal(isValidEmail('nope'), false);
});

test('cleanName trims and tidies spaces', () => {
  assert.equal(cleanName('  Sam    Lee '), 'Sam Lee');
  assert.equal(cleanName(null), '');
});
