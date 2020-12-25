import dynamic from "next/dynamic";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { GET_POKEMONS } from "../apollo/query/GET_POKEMONS";
import { Loading } from "../components";

const Main = dynamic(import("../components/Main"));
const Pokemons = dynamic(import("../Content/Pokemons"));

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [variables, setVariables] = useState({ limit: 39, offset: 1 });
  const [pokemons, setPokemons] = useState([]);

  const { data, fetchMore } = useQuery(GET_POKEMONS, {
    variables: { limit: variables.limit, offset: variables.offset },
  });

  useBottomScrollListener(() => {
    setLoading(true);
    fetchMore({
      variables: {
        limit: variables.limit,
        offset: variables.offset + variables.limit + 1,
      },
    }).then(() => {
      setVariables({
        ...variables,
        offset: variables.offset + variables.limit + 1,
      });
    });
  });

  useEffect(() => {
    if (data) {
      setPokemons([...pokemons, ...data.pokemons.results]);
      setLoading(false);
    }
  }, [data]);

  return (
    <Main>
      {loading && <Loading />}
      {pokemons?.map((x) => {
        return <Pokemons key={x.id} data={x} />;
      })}
    </Main>
  );
}
