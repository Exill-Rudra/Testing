import test from 'node:test';
import assert from 'node:assert/strict';
import {calculateTotal} from '../public/js/pricing.js';

test('an empty order costs nothing', () => {
  assert.deepEqual(calculateTotal([]), {subtotal: 0, discount: 0, total: 0});
});

test('a small order is added up with no discount', () => {
  const order = calculateTotal([{id: 'espresso', qty: 2}, {id: 'croissant', qty: 1}]);
  assert.equal(order.subtotal, 8.1);
  assert.equal(order.discount, 0);
  assert.equal(order.total, 8.1);
});

test('items that are not on the menu are ignored', () => {
  assert.equal(calculateTotal([{id: 'unicorn-latte', qty: 3}]).subtotal, 0);
});

test('a big order gets 10% off', () => {
  const order = calculateTotal([{id: 'espresso', qty: 20}]);
  assert.equal(order.subtotal, 50);
  assert.equal(order.discount, 5);
  assert.equal(order.total, 45);
});
