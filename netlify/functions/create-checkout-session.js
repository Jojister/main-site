// netlify/functions/create-checkout-session.js
//
// The client sends only product IDs, sizes and quantities. Titles and prices are
// looked up here from products.json so the browser can't set its own price.

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { prints } = require('../../src/data/products.json');

const MAX_QUANTITY = 20;

const jsonResponse = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

const buildLineItem = ({ id, size, quantity }) => {
  const product = prints.find((p) => p.id === id);
  const variant = product?.sizes.find((s) => s.size === size);
  const qty = Number(quantity);

  if (!product || !variant || !Number.isInteger(qty) || qty < 1 || qty > MAX_QUANTITY) {
    return null;
  }

  return {
    price_data: {
      currency: 'usd',
      product_data: {
        name: product.title,
        description: `Size: ${variant.size}`,
      },
      unit_amount: Math.round(variant.price * 100),
    },
    quantity: qty,
  };
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed' });
  }

  let items;
  try {
    ({ items } = JSON.parse(event.body || '{}'));
  } catch {
    return jsonResponse(400, { error: 'Invalid request body' });
  }

  if (!Array.isArray(items) || items.length === 0) {
    return jsonResponse(400, { error: 'Cart is empty' });
  }

  const lineItems = items.map(buildLineItem);
  if (lineItems.some((item) => item === null)) {
    return jsonResponse(400, { error: 'Cart contains an invalid item' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.URL}/shop`,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'JP'],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 500, currency: 'usd' },
            display_name: 'Standard Shipping (5-7 days)',
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 1500, currency: 'usd' },
            display_name: 'Express Shipping (2-3 days)',
          },
        },
      ],
    });

    return jsonResponse(200, { url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    return jsonResponse(500, { error: 'Could not start checkout' });
  }
};
