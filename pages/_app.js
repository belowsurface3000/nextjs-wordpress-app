import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/apolloClient";
import styles from "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
