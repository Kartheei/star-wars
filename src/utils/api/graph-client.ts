import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    ApolloLink
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";


const httpLink = createHttpLink({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
});

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) => {
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
        });

        return;
    }

    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }

    return forward(operation);
});

const retryLink = new RetryLink({
    attempts: {
        max: 3,
        retryIf: (error, _operation) => !!error && error.statusCode !== 400,
    },
    delay: {
        initial: 300,
        max: 2000,
        jitter: true
    }
});

const link = ApolloLink.from([errorLink, retryLink, httpLink]);

const TTL = 10 * 1000;

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                _: {
                    read(existing) {
                        if (existing && Date.now() - existing.__timestamp < TTL) {
                            return existing.data;
                        }
                        return undefined;
                    },
                    merge(existing, incoming) {
                        return {
                            ...incoming,
                            __timestamp: Date.now(),
                            data: incoming
                        };
                    }
                }
            }
        }
    }
});

const client = new ApolloClient({
    link,
    cache
});

export { client };