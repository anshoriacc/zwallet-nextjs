import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "src/common/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { store, persistor } from "src/redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zwallet</title>
        <link rel="icon" href="/icons/icon.png" />
      </Head>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />

      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
