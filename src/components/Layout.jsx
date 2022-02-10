import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Real Vision Next App</title>
        <meta name="description" content="App description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {children}
      </main>
    </div>
  );
}
