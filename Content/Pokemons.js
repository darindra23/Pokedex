import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GET_POKEMON } from "../apollo/query/GET_POKEMON";
import { useContext } from "react";
import { Context } from "../context";
import Swal from "sweetalert2";

import {
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
  Notifikasi,
} from "../components";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export default function Pokemons({ data }) {
  const router = useRouter();
  const { myPokemon, setMyPokemon } = useContext(Context);
  const [loadData, { data: pokemon }] = useLazyQuery(GET_POKEMON, {
    variables: { name: data.name },
  });

  useEffect(() => {
    if (data.id) loadData();
  }, []);

  const removePokemon = async () => {
    const confirmation = await Swal.fire({
      title: `Are you sure?`,
      text: `${data.nickname} Would be released.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#c22a19",
      cancelButtonColor: "black",
      confirmButtonText: "Yes",
    });

    if (confirmation.isConfirmed) {
      const newPokemon = myPokemon.filter((x) => x.nickname !== data.nickname);
      setMyPokemon(newPokemon);
      localStorage.setItem("myPokemon", JSON.stringify(newPokemon));
      Toast.fire({
        icon: "success",
        title: `${data.nickname} succesfully released.`,
      });
    }
  };

  return (
    <Grid>
      {data.nickname && (
        <Notifikasi clickable="true" margin="0 -1rem" onClick={removePokemon}>
          X
        </Notifikasi>
      )}
      <Card
        clickable={router.pathname === "/my-pokemon" ? false : true}
        onClick={() =>
          router.pathname === "/my-pokemon"
            ? null
            : router.push(`/pokemon-detail/${data.name}`)
        }
      >
        <CardContent width="7.5rem">
          <Typography title="true" size="small" margin="0" color="#777">
            {data.nickname
              ? data.nickname
              : data.id < 10
              ? `# 00${data.id}`
              : data.id < 100
              ? `# 0${data.id}`
              : `# ${data.id}`}
          </Typography>
          <Typography title="true" size="medium" margin="0">
            {data.name}
          </Typography>
          <Grid justifyContent="space-between" margin="0.25rem 0 0 0">
            {data.nickname
              ? data.types.map((x) => {
                  return (
                    <Chip key={x.type.name} type={x.type.name} color="white">
                      {x.type.name}
                    </Chip>
                  );
                })
              : pokemon?.pokemon?.types?.map((x) => {
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
          loading="lazy"
          key={data.id || data.nickname}
          src={data.image}
          height={100}
          width={100}
        />
      </Card>
    </Grid>
  );
}
