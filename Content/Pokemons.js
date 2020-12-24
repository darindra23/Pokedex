import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_POKEMON } from "../apollo/query/GET_POKEMON";

import { Card, CardContent, Chip, Grid, Typography } from "../components";

export default function Pokemons({ data }) {
  const router = useRouter();

  const { data: pokemon } = useQuery(GET_POKEMON, {
    variables: { name: data.name },
  });

  return (
    <Card onClick={() => router.push(`/pokemon-detail/${data.name}`)}>
      <CardContent width="7.5rem">
        <Typography title="true" size="small" margin="0" color="#777">
          {data.id < 10
            ? `# 00${data.id}`
            : data.id < 100
            ? `# 0${data.id}`
            : `# ${data.id}`}
        </Typography>
        <Typography title="true" size="medium" margin="0">
          {data.name}
        </Typography>
        <Grid justifyContent="space-between" margin="0.25rem 0 0 0">
          {pokemon?.pokemon.types.map((x) => {
            return (
              <Chip key={x.type.name} type={x.type.name} color="white">
                {x.type.name}
              </Chip>
            );
          })}
        </Grid>
      </CardContent>
      <img
        alt="pokemon"
        key={data.id}
        src={data.image}
        height={100}
        width={100}
      />
    </Card>
  );
}
