import dynamic from "next/dynamic";
import { useContext } from "react";
import { Context } from "../context";

const Main = dynamic(import("../components/Main"));
const Pokemons = dynamic(import("../Content/Pokemons"));

export default function MyPokemon() {
  const { myPokemon, setMyPokemon } = useContext(Context);

  return (
    <Main>
      {myPokemon.length
        ? myPokemon.map((x, idx) => {
            return <Pokemons key={idx} data={x} />;
          })
        : null}
    </Main>
  );
}
