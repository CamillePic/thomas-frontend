
const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  
  if (req.method === 'POST') {
    try {
      const { cartDetails } = req.body;

      // Create Checkout Sessions from body params.
           console.log('====================================');
      console.log("cartDetails in CheckoutSess:", cartDetails);
      console.log('====================================');

      // Check if cartDetails is available and not empty
      // if (!cartDetails || Object.keys(cartDetails).length === 0) {
      //   throw new Error("Cart is empty");
      // }

      console.log('====================================');
      console.log("cartDetails in CheckoutSess AFTER:", cartDetails);
      console.log('====================================');

      console.log('====================================');
      console.log("keys", Object.keys(cartDetails).map((item) => ({ price: item, quantity: cartDetails[item].quantity })));
      console.log('====================================');
      
      const session = await stripe.checkout.sessions.create({ 
        
        payment_method_types: ["card"],
        line_items: Object.keys(cartDetails).map((item) => ({
          price: item, // Use the item key (price_id) directly
          quantity: cartDetails[item].quantity, // Access quantity directly
        })),
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
