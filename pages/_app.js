import "../styles/globals.css";
import Head from "next/head";
import React from "react";
import Menu from "../components/Menu";

function App({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Head>
        <title>Thomas Takada</title>
        <meta
          name="Thomas Takada"
          content="I design objects and fabricate them in limited series by collaborating with local artisans. Find them for sale on this website or contact me for special orders."
        ></meta>
          <link rel="icon" href="/logoTT.png "/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
