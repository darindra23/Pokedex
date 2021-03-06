import dynamic from "next/dynamic";
import { useQuery } from "@apollo/client";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { GET_POKEMONS } from "../apollo/query/GET_POKEMONS";
import { Loading } from "../components";

const Main = dynamic(import("../components/Main"));
const Pokemons = dynamic(import("../Content/Pokemons"));

export default function Home() {
  const { loading, data, fetchMore } = useQuery(GET_POKEMONS, {
    variables: {
      limit: 39,
      offset: 1,
    },
  });

  useBottomScrollListener(() => {
    fetchMore({
      variables: {
        offset: data.pokemons.results.length + 1,
      },
      notifyOnNetworkStatusChange: true,
    });
  });

  return (
    <Main>
      {loading && <Loading />}
      {data?.pokemons.results.map((x) => {
        return <Pokemons key={x.id} data={x} />;
      })}
    </Main>
  );
}
