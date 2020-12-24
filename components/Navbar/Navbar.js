import styled from "@emotion/styled";

import NavbarTop from "./Navbar-Top";
import NavbarCategory from "./Navbar-Category";

const NavbarContainer = styled.div`
  position: fixed;
  box-shadow: 0px 1px 5px 0px rgba(79, 79, 79, 1);
  z-index: 10;
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarTop />
      <NavbarCategory />
    </NavbarContainer>
  );
}
