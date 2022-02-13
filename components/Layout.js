import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next.js, GraphQL, Wordpress Project</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
