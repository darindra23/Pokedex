import dynamic from "next/dynamic";
import { useContext } from "react";
import { Context } from "../../context";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../../apollo/query/GET_POKEMON";
import Swal from "sweetalert2";
import { Loading } from "../../components";

const Main = dynamic(import("../../components/Main"));
const Grid = dynamic(import("../../components/Grid"));
const FloatPokeball = dynamic(import("../../components/Float-Pokeball"));
const PokemonContent = dynamic(import("../../Content/Pokemon/Content"));
const PokemonImage = dynamic(import("../../Content/Pokemon/Image"));

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

export default function PokemonDetail() {
  const router = useRouter();
  const { myPokemon, setMyPokemon } = useContext(Context);

  const { loading, data } = useQuery(GET_POKEMON, {
    variables: { name: router.query.name },
  });

  const addPokemon = async () => {
    const success = Math.random();
    if (success < 0.5) {
      const { value } = await Swal.fire({
        title: `${data.pokemon.name} catched.`,
        input: "text",
        inputLabel: "Please give a nickname",
        confirmButtonColor: "#c22a19",
        confirmButtonText: "Add",
        inputValidator: (nickname) => {
          if (!nickname) return "Please input a nickname.";
          let exist = myPokemon.find((x) => x.nickname === nickname);
          if (exist) return `${nickname} already exist.`;
        },
      });
      if (value) {
        let myPokemonData = {
          nickname: value,
          name: data.pokemon.name,
          image: data.pokemon.sprites.front_default,
          types: data.pokemon.types,
        };
        setMyPokemon([...myPokemon, myPokemonData]);
        localStorage.setItem(
          "myPokemon",
          JSON.stringify([...myPokemon, myPokemonData])
        );
        router.push("/my-pokemon");
        Toast.fire({
          icon: "success",
          title: `${value} succesfully added.`,
        });
      } else {
        let runaway = await Swal.fire({
          title: "Oops!.",
          text: `${data.pokemon.name} has run away.`,
          icon: "warning",
          confirmButtonColor: "#c22a19",
        });
        if (runaway) router.push("/");
      }
    } else {
      let runaway = await Swal.fire({
        title: "Oops!.",
        text: `${data.pokemon.name} has run away.`,
        icon: "warning",
        confirmButtonColor: "#c22a19",
      });
      if (runaway) router.push("/");
    }
  };

  if (loading) return <Loading />;
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
