import styled from "@emotion/styled";

const ImageWrapper = styled.div`
  background: url(/pokeball.png) no-repeat;
  background-size: contain;
  background-position: right;
  margin: 0.5rem 0;
`;

export default function PokemonImage({ data }) {
  return (
    <ImageWrapper>
      <img
        alt="big-pokemon"
        src={data.pokemon.sprites.front_default}
        height={200}
        width={200}
      />
    </ImageWrapper>
  );
}
