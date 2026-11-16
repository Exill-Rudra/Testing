import test from 'node:test';
import assert from 'node:assert/strict';
import {MENU, findItem} from '../public/js/menu.js';

test('the menu has items with a name and a price', () => {
  assert.equal(MENU.length, 5);
  for (const item of MENU) {
    assert.ok(item.name.length > 0);
    assert.ok(item.price > 0);
  }
});

test('every menu item has its own id', () => {
  assert.equal(new Set(MENU.map(item => item.id)).size, MENU.length);
});

test('findItem returns the item, or null when there is none', () => {
  assert.equal(findItem('espresso').name, 'Espresso');
  assert.equal(findItem('unicorn-latte'), null);
});
