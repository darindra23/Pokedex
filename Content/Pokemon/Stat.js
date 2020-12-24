import { Grid, Typography } from "../../components";

export default function PokemonStat({ data }) {
  return (
    <Grid justifyContent="space-evenly" width="100%" margin="1rem 0 0">
      <Grid flexDirection="column" alignItems="center">
        <Typography title="true" size="medium" margin="0">
          {data.pokemon.height / 10} M
        </Typography>
        <Typography margin="0.5rem">Height</Typography>
      </Grid>
      <Grid flexDirection="column" alignItems="center">
        <Typography title="true" size="medium" margin="0">
          {data.pokemon.weight / 10} KG
        </Typography>
        <Typography margin="0.5rem">Weight</Typography>
      </Grid>
    </Grid>
  );
}
