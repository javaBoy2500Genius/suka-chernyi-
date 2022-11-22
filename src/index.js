import React from "react";
import ReactDOM from "react-dom/client";
import { Client } from "./apollo-client/apollo-client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import "./index.css";

import App from "./components/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={Client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
