import "../styles/globals.css";
import Head from "next/head";
import React from "react";
import Menu from "../components/Menu";

function App({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <title>Thomas Takada</title>
        <meta
          name="Thomas Takada"
          content="I design objects and fabricate them in limited series by collaborating with local artisans. Find them for sale on this website or contact me for special orders."
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
