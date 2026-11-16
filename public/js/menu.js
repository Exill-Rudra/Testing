// What the cafe sells. Prices are in dollars.
export const MENU = [
  {id: 'espresso', name: 'Espresso', price: 2.5, tags: ['hot']},
  {id: 'flat-white', name: 'Flat white', price: 3.8, tags: ['hot', 'milk']},
  {id: 'cold-brew', name: 'Cold brew', price: 4.2, tags: ['cold']},
  {id: 'croissant', name: 'Butter croissant', price: 3.1, tags: ['food']},
  {id: 'banana-bread', name: 'Banana bread', price: 3.6, tags: ['food']},
];

export function findItem(id) {
  return MENU.find(item => item.id === id) ?? null;
}

export function formatPrice(amount) {
  return '$' + amount;
}
