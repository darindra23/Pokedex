import { useContext } from "react";
import { useRouter } from "next/router";
import { Grid, Notifikasi, Typography } from "../index";
import { Context } from "../../context";

export default function NavbarCategory() {
  const router = useRouter();
  const { myPokemon } = useContext(Context);

  return (
    <Grid justifyContent="space-around" backgroundColor="black">
      <Typography
        onClick={() => router.push("/")}
        title="true"
        isNav="true"
        size="medium"
        color="white"
        active={router.pathname === "/"}
      >
        Pokédex
      </Typography>

      <Grid
        onClick={() => router.push("/my-pokemon")}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          title="true"
          isNav="true"
          size="medium"
          color="white"
          active={router.pathname === "/my-pokemon"}
        >
          My Pokémon
        </Typography>
        {myPokemon.length ? <Notifikasi>{myPokemon.length}</Notifikasi> : null}
      </Grid>
    </Grid>
  );
}
