import Head from "next/head";

import "src/common/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zwallet</title>
        <link rel="icon" href="/icons/icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
