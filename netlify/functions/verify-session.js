// netlify/functions/verify-session.js

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const jsonResponse = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return jsonResponse(405, { error: 'Method not allowed' });
  }

  const sessionId = event.queryStringParameters?.sessionId;
  if (!sessionId || !sessionId.startsWith('cs_')) {
    return jsonResponse(400, { error: 'Session ID required' });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    // Only the payment status is returned; customer details stay server-side.
    return jsonResponse(200, { status: session.payment_status });
  } catch (error) {
    console.error('Stripe error:', error);
    return jsonResponse(500, { error: 'Could not verify session' });
  }
};
