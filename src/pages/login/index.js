import Head from "next/head";

import NavBar from "src/common/components/NavBar";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Zwallet</title>
        <meta
          name="description"
          content="Landing page of Zwallet, a money transfer app."
        />
      </Head>

      <main>
        <NavBar />
        <h1>Login</h1>
      </main>
    </>
  );
}
