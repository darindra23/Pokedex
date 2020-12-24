import { useRouter } from "next/router";

import { Grid, Typography } from "../index";

export default function NavbarCategory() {
  const router = useRouter();

  return (
    <Grid justifyContent="space-around" backgroundColor="black">
      <Typography
        onClick={() => router.push("/")}
        title="true"
        size="medium"
        color="white"
      >
        Pokédex
      </Typography>
      <Typography title="true" size="medium" color="white">
        My Pokémon
      </Typography>
    </Grid>
  );
}
