import '../styles/globals.css';
import Head from 'next/head';
import React from "react";
import Menu from "../components/Menu";

function App({ Component, pageProps }) {
  return (
    <>
    <Menu />
      <Head>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;


