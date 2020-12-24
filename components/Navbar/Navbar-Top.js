import { Grid } from "../index";

import styled from "@emotion/styled";
import Image from "next/image";

const ImageWrapper = styled.div`
  padding: 0.25rem;
`;

export default function NavbarTop() {
  return (
    <Grid justifyContent="center" backgroundColor="#c22a19" width="100vw">
      <ImageWrapper>
        <Image alt="Logo" src="/pokemon.png" width={160} height={70} />
      </ImageWrapper>
    </Grid>
  );
}
