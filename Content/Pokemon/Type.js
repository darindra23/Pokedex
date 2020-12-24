import { Chip, Grid } from "../../components";

export default function PokemonType({ data }) {
  return (
    <Grid
      justifyContent={
        data.pokemon.types.length < 2 ? "center" : "space-between"
      }
      margin="1rem 0 0 0"
      width="15rem"
    >
      {data.pokemon.types.map((x) => {
        return (
          <Chip
            key={x.type.name}
            type={x.type.name}
            color="white"
            width="7rem"
            padding="0.5rem 0"
          >
            {x.type.name}
          </Chip>
        );
      })}
    </Grid>
  );
}
