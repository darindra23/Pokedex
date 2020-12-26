import { ApolloClient, InMemoryCache } from "@apollo/client";
import _ from "lodash";

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
                    results: _.uniqWith(
                      [...existing.results, ...incoming.results],
                      _.isEqual
                    ),
                  }
                : incoming;
            },
          },
        },
      },
    },
  }),
});
