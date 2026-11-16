// Wires the page together: the menu, the order, and the newsletter form.
import {MENU, findItem, formatPrice} from './menu.js';
import {calculateTotal} from './pricing.js';
import {isValidEmail} from './validate.js';

const cart = new Map(); // item id -> how many

const menuList = document.querySelector('#menu-list');
for (const item of MENU) {
  const row = document.createElement('li');
  row.innerHTML = `<span class="name">${item.name}</span> <span class="price">${formatPrice(item.price)}</span>`;
  const add = document.createElement('button');
  add.textContent = '+';
  add.addEventListener('click', () => {
    cart.set(item.id, (cart.get(item.id) ?? 0) + 1);
    renderOrder();
  });
  row.append(add);
  menuList.append(row);
}

function renderOrder() {
  const lines = [...cart].map(([id, qty]) => ({id, qty}));
  const {subtotal, discount, total} = calculateTotal(lines);
  document.querySelector('#cart-empty').hidden = lines.length > 0;
  document.querySelector('#cart-lines').replaceChildren(...lines.map(({id, qty}) => {
    const li = document.createElement('li');
    li.textContent = `${qty} × ${findItem(id).name}`;
    return li;
  }));
  document.querySelector('#subtotal').textContent = formatPrice(subtotal);
  document.querySelector('#total').textContent = formatPrice(total);
  document.querySelector('#discount-row').classList.toggle('active', discount > 0);
}

document.querySelector('#signup-form').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#signup-message');
  if (!isValidEmail(email)) {
    message.textContent = 'Please enter a valid email.';
    return;
  }
  message.textContent = `Thanks! We will send our weekly specials to ${email}.`;
});
