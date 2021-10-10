import {split, HttpLink} from "@apollo/client";
import {getMainDefinition} from "@apollo/client/utilities";
import {WebSocketLink} from "@apollo/client/link/ws";
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {SubscriptionClient} from "subscriptions-transport-ws";

const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URL,
    headers: {
        "x-hasura-admin-secret": `12345`,
    },
});

const wsLink = new WebSocketLink(
    new SubscriptionClient(process.env.REACT_APP_GRAPHQL_WEB_SOCKET, {
        reconnect: true,
        timeout: 30000,
        connectionParams: {
            headers: {
                "x-hasura-admin-secret": `12345`,
            },
        },
    })
);

const splitLink = split(
    ({query}) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        );
    },
    wsLink,
    httpLink
);

export const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});
