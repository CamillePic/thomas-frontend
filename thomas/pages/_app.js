import '../styles/globals.css';
import Head from 'next/head';
import React from "react";
import Menu from "../components/Menu";
import { CartProvider } from 'use-shopping-cart';
import { loadStripe } from '@stripe/stripe-js';

function App({ Component, pageProps }) {
  return (
    <CartProvider
    mode="payment"
    cartMode="client-only"
    stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
    successUrl="stripe.com"
    cancelUrl="twitter.com/dayhaysoos"
    currency="EUR"
    shouldPersist={true}>
    <Menu />
      <Head>
      </Head>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default App;



