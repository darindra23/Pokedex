import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemons: {
            keyArgs: false,
            merge(existing, incoming) {
              return existing
                ? {
                    ...existing,
                    results: [...existing.results, ...incoming.results],
                  }
                : incoming;
            },
          },
        },
      },
    },
  }),
});
