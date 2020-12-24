import { Chip, Grid, Typography } from "../../components";

export default function PokemonMoves({ data }) {
  const getBackgroundColor = () => {
    const color = [
      "#ec5858",
      "#9f5f80",
      "#fdb827",
      "#70af85",
      "#bbbbbb",
      "#f05454",
      "#fa7f72",
      "#28abb9",
      "#0278ae",
    ];

    const random = Math.floor(Math.random() * color.length);

    return color[random];
  };

  return (
    <>
      <Typography title="true" size="medium" margin="0 0 0.25rem">
        Moves
      </Typography>
      <Grid
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="80%"
      >
        {data.pokemon.moves.slice(0, 5).map((x) => {
          return (
            <Chip
              key={x.move.name}
              backgroundColor={getBackgroundColor()}
              color="white"
              radius="15px"
              width="100%"
              padding="0.25rem 0px"
              margin="0.25rem 1rem"
            >
              {x.move.name}
            </Chip>
          );
        })}
      </Grid>
    </>
  );
}
