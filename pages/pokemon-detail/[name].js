import dynamic from "next/dynamic";
import { useContext } from "react";
import { Context } from "../../context";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../../apollo/query/GET_POKEMON";

const Main = dynamic(import("../../components/Main"));
const Grid = dynamic(import("../../components/Grid"));
const FloatPokeball = dynamic(import("../../components/Float-Pokeball"));
const PokemonContent = dynamic(import("../../Content/Pokemon/Content"));
const PokemonImage = dynamic(import("../../Content/Pokemon/Image"));

export default function PokemonDetail() {
  const router = useRouter();
  const { myPokemon, setMyPokemon } = useContext(Context);

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: router.query.name },
  });

  const addPokemon = () => {
    let myPokemonData = {
      nickname: "test",
      name: data.pokemon.name,
      image: data.pokemon.sprites.front_default,
      types: data.pokemon.types,
    };

    setMyPokemon([...myPokemon, myPokemonData]);
    localStorage.setItem(
      "myPokemon",
      JSON.stringify([...myPokemon, myPokemonData])
    );
  };

  if (loading) return <div>loading...</div>;
  return (
    <Main>
      <Grid flexDirection="column" alignItems="center">
        <PokemonImage data={data} />
        <PokemonContent data={data} />
        <FloatPokeball
          alt="pokeball"
          onClick={addPokemon}
          src="/pokeball2.png"
        />
      </Grid>
    </Main>
  );
}
