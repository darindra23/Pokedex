import dynamic from "next/dynamic";
import { useContext } from "react";
import { Context } from "../context";

const Main = dynamic(import("../components/Main"));
const Pokemons = dynamic(import("../Content/Pokemons"));
const Grid = dynamic(import("../components/Grid"));
const Typography = dynamic(import("../components/Typography"));

export default function MyPokemon() {
  const { myPokemon } = useContext(Context);

  return (
    <Main>
      {myPokemon.length ? (
        myPokemon.map((x, idx) => {
          return <Pokemons key={idx} data={x} />;
        })
      ) : (
        <Grid justifyContent="center" alignItems="center" empty="true">
          <Typography title="true" color="gainsboro">
            No pokemon has been caught
          </Typography>
        </Grid>
      )}
    </Main>
  );
}
