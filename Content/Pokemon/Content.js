import { PokemonCard } from "../../components";
import PokemonTitle from "./Title";
import PokemonType from "./Type";
import PokemonStat from "./Stat";
import PokemonMoves from "./Moves";

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
