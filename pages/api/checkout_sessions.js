// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       // Retrieve the cart items from the request body
//       const { cartItems } = req.body;

//       // Create an array of line_items based on the cart items
//       const line_items = cartItems.map((item) => ({
//         price: item.price_id, // Replace with the correct price ID for your products
//         quantity: item.quantity,
//       }));

//       // Create a session with the line_items
//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ["card"],
//         line_items,
//         mode: "payment",
//         success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
//         cancel_url: `${process.env.BASE_URL}/cancel`,
//       });

//       // Redirect the user to the Stripe Checkout page
//       res.redirect(303, session.url);
//     } catch (err) {
//       console.error(err);
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }


// Import required libraries and set up Stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { cartDetails } = req.body;

      console.log('====================================');
      console.log(Object.keys(cartDetails))
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

