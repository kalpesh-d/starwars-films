import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});

const query = gql`
  query Query($after: String, $before: String, $first: Int, $last: Int) {
    allFilms(after: $after, before: $before, first: $first, last: $last) {
      edges {
        cursor
        node {
          id
          director
          title
          releaseDate
        }
      }
    }
  }
`;

client.query({ query });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
