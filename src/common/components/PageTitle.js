import Head from "next/head";

export default function PageTitle({ title }) {
  return (
    <Head>
      <title>{title} | Zwallet</title>
      <meta
        name="description"
        content={`${title} page of Zwallet, a money transfer app.`}
      />
    </Head>
  );
}
