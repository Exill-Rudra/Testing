// What an order costs. The site promises "10% off orders of $30 or more".
import {findItem} from './menu.js';

/** @param lines [{id, qty}]  @returns {subtotal, discount, total} in dollars */
export function calculateTotal(lines) {
  let subtotal = 0;
  for (const {id, qty} of lines) {
    const item = findItem(id);
    if (!item) continue;
    subtotal += item.price * qty;
  }
  const discount = subtotal > 30 ? subtotal * 0.1 : 0;
  return {subtotal, discount, total: subtotal - discount};
}
