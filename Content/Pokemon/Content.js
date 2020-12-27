import dynamic from "next/dynamic";

const PokemonCard = dynamic(import("../../components/Card/Pokemon-Card"));
const PokemonTitle = dynamic(import("./Title"));
const PokemonType = dynamic(import("./Title"));
const PokemonStat = dynamic(import("./Stat"));
const PokemonMoves = dynamic(import("./Moves"));

export default function PokemonContent(props) {
  return (
    <PokemonCard>
      <PokemonTitle data={props.data} />
      <PokemonType data={props.data} />
      <PokemonStat data={props.data} />
      <PokemonMoves data={props.data} />
    </PokemonCard>
  );
}
