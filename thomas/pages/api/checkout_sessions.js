// Import required libraries and set up Stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { cartDetails } = req.body;

      console.log('====================================');
      console.log(cartDetails)
      console.log('====================================');
      // console.log('====================================');
      // console.log("price", cartDetails[item].price_id);
      // console.log('====================================');

      if (!cartDetails) {
        throw new Error('Cart is empty');
      }

      // Create Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: Object.keys(cartDetails).map((item) => ({
          price: item, // Use the item key (price_id) directly
          quantity: cartDetails[item].quantity, // Access quantity directly
        })),
        mode: 'payment',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      res.status(200).json({ sessionId: session.id });
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}