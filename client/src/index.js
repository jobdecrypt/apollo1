import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
// Let's import the installed "npm graphql @apollo/client"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Let's create an ApolloClient Instance
const client = new ApolloClient({
  /* 
  We need to provide a couple of options to the constructor. The first is the uri option, 
  which we use to specify the location of our GraphQL server. 
  Our server is running locally at localhost:4000, so the uri option looks like this:
  */
  //  URI for our graphQl server this could be -> Ex: "https://graphql.org/swapi-graphql"
  uri: "http://localhost:4000",
  /* 
  Second, every instance of ApolloClient uses an in-memory cache. 
  This enables it to store and reuse query results so it doesn't have to make as many network requests. 
  This makes our app's user experience feel much snappier.
  */
  // We provide an InMemoryCache instance in the cache option, like so:
  cache: new InMemoryCache(),
});
//  NEXT: ->  we wrap our app's top-level components in the ApolloProvider component and pass it our client instance as a prop:
ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
