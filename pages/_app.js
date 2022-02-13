import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/apolloClient";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <div className="background-color"></div>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
