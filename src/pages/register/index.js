import Head from "next/head";

import NavBar from "src/common/components/NavBar";
import Footer from "src/common/components/Footer";

export default function Register() {
  return (
    <>
      <Head>
        <title>Register | Zwallet</title>
        <meta
          name="description"
          content="Landing page of Zwallet, a money transfer app."
        />
      </Head>

      <main>
        <NavBar />
        <h1>Register</h1>
      </main>
    </>
  );
}
