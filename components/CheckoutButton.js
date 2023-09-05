// // import { useState, useEffect } from "react";
// // import { useShoppingCart } from "use-shopping-cart";
// // import { loadStripe } from "@stripe/stripe-js";
// // import { useRouter } from "next/router";

// // const stripePromise = loadStripe(
// //   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// // );

// // export default function CheckoutButton() {
// //   const { cartCount, cartDetails } = useShoppingCart();
// //   const router = useRouter();

// //   const redirectToStripeCheckout = async () => {
// //     const stripe = await stripePromise;
// //     try {
// //       if (cartCount > 0) {
// //         const session = await stripe.checkout.sessions.create({
// //           payment_method_types: ["card"],
// //           line_items: Object.keys(cartDetails).map((item) => ({
// //             price: cartDetails[item].price_id,
// //             quantity: cartDetails[item].quantity,
// //           })),
// //           mode: "payment",
// //           success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
// //           cancel_url: `${window.location.origin}/cancel`,
// //         });

// //         if (session.id) {
// //           // Redirect to the Stripe Checkout page
// //           router.push(session.url);
// //         } else {
// //           // Handle the case where session creation failed
// //           console.error("Failed to create session");
// //         }
// //       }
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   useEffect(() => {
// //     redirectToStripeCheckout();
// //   }, []);

// //   return (
// //     <article className="mt-3 flex flex-col">
// //       <form action="/api/checkout_sessions" method="POST">
// //         <section>
// //           <button type="submit" role="link">
// //             Checkout
// //           </button>
// //         </section>
// //         <style jsx>
// //           {`
// //             section {
// //               background: #ffffff;
// //               display: flex;
// //               flex-direction: column;
// //               width: 400px;
// //               height: 112px;
// //               border-radius: 6px;
// //               justify-content: space-between;
// //             }
// //             button {
// //               height: 36px;
// //               background: #556cd6;
// //               border-radius: 4px;
// //               color: white;
// //               border: 0;
// //               font-weight: 600;
// //               cursor: pointer;
// //               transition: all 0.2s ease;
// //               box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
// //             }
// //             button:hover {
// //               opacity: 0.8;
// //             }
// //           `}
// //         </style>
// //       </form>
// //     </article>
// //   );
// // }



// import { useState, useEffect } from 'react';
// import { useShoppingCart } from 'use-shopping-cart';
// import { loadStripe } from '@stripe/stripe-js';
// import { useRouter } from 'next/router';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

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

//   useEffect(() => {
//     redirectToStripeCheckout();
//   }, []);

//   return (
//     <article className="mt-3 flex flex-col">
//       <form action="/api/checkout_sessions" method="POST">
//         <section>
//           <button type="submit" role="link">
//             Checkout
//           </button>
//         </section>
//         <style jsx>
//         {`
//             section {
//               background: #ffffff;
//               display: flex;
//               flex-direction: column;
//               width: 400px;
//               height: 112px;
//               border-radius: 6px;
//               justify-content: space-between;
//             }
//             button {
//               height: 36px;
//               background: #556cd6;
//               border-radius: 4px;
//               color: white;
//               border: 0;
//               font-weight: 600;
//               cursor: pointer;
//               transition: all 0.2s ease;
//               box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
//             }
//             button:hover {
//               opacity: 0.8;
//             }
//           `}
//         </style>
//       </form>
//     </article>
//   );
// }

import { useState, useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutButton() {
  const { cartCount, cartDetails } = useShoppingCart();
  const router = useRouter();

  const redirectToStripeCheckout = async () => {
    const stripe = await stripePromise;
    try {
      if (cartCount > 0) {
        const response = await fetch('/api/checkout_sessions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ cartDetails }),
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

  // Remove this useEffect block
  // useEffect(() => {
  //   redirectToStripeCheckout();
  // }, []);

  return (
    <article className="mt-3 flex flex-col">
      <form
        action="/api/checkout_sessions"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault(); // Prevent the form from submitting
          redirectToStripeCheckout(); // Call the function when the form is submitted
        }}
      >
        <section>
          <button type="submit" role="link">
            Checkout
          </button>
        </section>
        <style jsx>
         {`
            section {
              background: #ffffff;
              display: flex;
              flex-direction: column;
              width: 400px;
              height: 112px;
              border-radius: 6px;
              justify-content: space-between;
            }
            button {
              height: 36px;
              background: #556cd6;
              border-radius: 4px;
              color: white;
              border: 0;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s ease;
              box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
            }
            button:hover {
              opacity: 0.8;
            }
           `}
         </style>     
 </form>
    </article>
  );
}
