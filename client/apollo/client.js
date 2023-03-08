import {ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
    uri: process.env.GRAPHQL_ENDPOINT,
    credentials: 'include',
    fetchOptions: {
        mode: 'cors',
    },
})


const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default client;