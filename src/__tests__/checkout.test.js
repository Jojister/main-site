const mockCreate = jest.fn();
jest.mock('stripe', () => () => ({ checkout: { sessions: { create: mockCreate } } }));

const { handler } = require('../../netlify/functions/create-checkout-session');
const { prints } = require('../data/products.json');

const post = items => handler({ httpMethod: 'POST', body: JSON.stringify({ items }) });

beforeEach(() => {
  mockCreate.mockReset();
  mockCreate.mockResolvedValue({ url: 'https://checkout.stripe.com/test' });
});

test('uses the server-side price, ignoring any price sent by the client', async () => {
  const product = prints[0];
  const variant = product.sizes[0];
  const res = await post([{ id: product.id, size: variant.size, quantity: 2, price: 0.01 }]);

  expect(res.statusCode).toBe(200);
  const [lineItem] = mockCreate.mock.calls[0][0].line_items;
  expect(lineItem.price_data.unit_amount).toBe(Math.round(variant.price * 100));
  expect(lineItem.quantity).toBe(2);
});

test.each([
  [[{ id: 'not-a-product', size: '8x10', quantity: 1 }]],
  [[{ id: prints[0].id, size: 'huge', quantity: 1 }]],
  [[{ id: prints[0].id, size: prints[0].sizes[0].size, quantity: 0 }]],
  [[]],
])('rejects invalid carts', async items => {
  const res = await post(items);
  expect(res.statusCode).toBe(400);
  expect(mockCreate).not.toHaveBeenCalled();
});
