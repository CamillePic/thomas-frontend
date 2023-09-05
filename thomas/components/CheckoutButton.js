// import { useEffect } from 'react';
// import { useShoppingCart } from 'use-shopping-cart';
// import { loadStripe } from '@stripe/stripe-js';
// import { useRouter } from 'next/router';

// const stripePromise = loadStripe(`${process.env.pk_live_51NfPvRBBUlEBHPZ69PMpBScseRd8th2nIxnboO5XRF7aDKboEltVP69kgY160E8uh9jIySQ0zuimwewCTLBMFbNe00OA8WEaGn}`);

// export default function CheckoutButton() {
//   const { cartCount, cartDetails } = useShoppingCart();
//   const router = useRouter();

//   const redirectToStripeCheckout = async () => {
//     const stripe = await stripePromise;
//     try {
//       if (cartCount > 0) {
//         const response = await fetch('/api/checkout_sessions', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ cartDetails }),
//         });

//         const session = await response.json();

//         if (session.sessionId) {
//           // Redirect to the Stripe Checkout page
//           const { error } = await stripe.redirectToCheckout({
//             sessionId: session.sessionId,
//           });

//           if (error) {
//             console.error('Failed to redirect to checkout:', error);
//           }
//         } else {
//           // Handle the case where session creation failed
//           console.error('Failed to create session');
//         }
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Remove the useEffect and trigger the Stripe Checkout directly when the button is clicked
//   const handleCheckoutClick = async () => {
//     redirectToStripeCheckout();
//   };

//   // Prevent the default form submission behavior
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <article className="mt-3 flex flex-col">
//       {/* Add an onClick handler to initiate checkout */}
//       <form onSubmit={handleSubmit}>
//         <section>
//           <button type="submit" role="link" onClick={handleCheckoutClick}>
//             Checkout
//           </button>
//         </section>
//       </form>
//     </article>
//   );
// }


const handleCheckoutClick = async () => {
  try {
    const stripe = await stripePromise;

    const productIds = Object.keys(cartDetails); // Get product IDs from cartDetails

    if (productIds.length > 0) {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productIds }), // Pass the product IDs to your backend
      });

      const session = await response.json();

      if (session.sessionId) {
        // Redirect to the Stripe Checkout page
        const { error } = await stripe.redirectToCheckout({
          sessionId: session.sessionId,
        });

        if (error) {
          console.error('Failed to redirect to checkout:', error);
        }
      } else {
        // Handle the case where session creation failed
        console.error('Failed to create session');
      }
    }
  } catch (error) {
    console.error(error);
  }
};
