// CheckoutButton.js
import { useState, useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutButton({ cartDetails }) {
  const { cartCount } = useShoppingCart();
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

  return (
    <article className="mt-3 flex flex-col">
      <form
        action="/api/checkout_sessions"
        method="POST"
        // onSubmit={(e) => {
        //   e.preventDefault(); // Prevent the form from submitting
        //   redirectToStripeCheckout(); // Call the function when the form is submitted
        // }}
      >
        <section>
          <button type="submit" role="link">
            Checkout
          </button>
        </section>
      </form>
    </article>
  );
}
