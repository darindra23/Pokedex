import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      previous
      next
      results {
        id
        name
        image
      }
    }
  }
`;
