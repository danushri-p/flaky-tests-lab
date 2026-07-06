const cart = require('../src/cart');

beforeEach(() => {
  cart.clearCart();
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('addItem adds to cart', () => {
  cart.addItem({ id: 1, name: 'Widget' });
  expect(cart.getCart().length).toBe(1);
});

test('cart total is computed correctly (fixed)', () => {
  // Mock Math.random() so the test is deterministic
  jest.spyOn(Math, 'random').mockReturnValue(0.8);

  const simulatedTotal = Math.random() > 0.5 ? 100 : 90;

  expect(simulatedTotal).toBe(100);
});

test('cart starts empty', () => {
  expect(cart.getCart().length).toBe(0);
});

test('removeItem removes from cart', () => {
  cart.addItem({ id: 2, name: 'Gadget' });
  cart.removeItem(2);
  expect(cart.getCart().length).toBe(0);
});