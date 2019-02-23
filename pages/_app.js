/**
 * Next.js uses the App component to initialize pages.
 * Persist layout, share state, inject data here
 */

import React from "react";
import App, { Container } from "next/app";
import withApolloClient from "../lib/with-apollo-client";
import { ApolloProvider } from "react-apollo";
import AppLayout from "../components/AppLayout.js";

class MyApp extends App {
  /**
   * Copied from [next.js github examples repo](https://github.com/zeit/next.js/tree/canary/examples/with-apollo/components)
   */
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
