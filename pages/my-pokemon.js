import dynamic from "next/dynamic";
import { useContext } from "react";
import { Context } from "../context";
import { Grid, Typography } from "../components";

const Main = dynamic(import("../components/Main"));
const Pokemons = dynamic(import("../Content/Pokemons"));

export default function MyPokemon() {
  const { myPokemon, setMyPokemon } = useContext(Context);

  return (
    <Main>
      {myPokemon.length ? (
        myPokemon.map((x, idx) => {
          return <Pokemons key={idx} data={x} index={idx} />;
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
