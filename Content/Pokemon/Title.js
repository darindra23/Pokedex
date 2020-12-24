import { Typography } from "../../components";

export default function PokemonTitle({ data }) {
  return (
    <>
      <Typography title="true" size="small" margin="1rem 0 0" color="#777">
        {data.pokemon.id < 10
          ? `# 00${data.pokemon.id}`
          : data.pokemon.id < 100
          ? `# 0${data.pokemon.id}`
          : `# ${data.pokemon.id}`}
      </Typography>
      <Typography title="true" align="center" margin="0" size="xl">
        {data.pokemon.name}
      </Typography>
    </>
  );
}
