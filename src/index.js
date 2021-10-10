import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {ThemeProvider} from "@material-ui/core/styles";

import {ApolloProvider} from "@apollo/client";

import App from "./App";
import theme from "./theme/theme";
import {client} from "./context/apolloContext";

const rootElement = document.querySelector("#root");

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </ThemeProvider>,
    rootElement
);
