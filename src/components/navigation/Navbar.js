import { useState } from "react";
import styled from "styled-components";
import menuIcon from "../../images/icon-menu.svg";
import menuIconClosed from "../../images/icon-close-menu.svg";

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const NavbarLogo = styled.div`
  /* border: 1px solid red; */
`;

const NavbarMenuIcon = styled.div`
  cursor: pointer;
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarWrapper>
      <NavbarLogo>snap</NavbarLogo>
      <NavbarMenuIcon onClick={toggleMenu}>
        {!menuOpen ? (
          <img src={menuIcon} alt="menu icon" />
        ) : (
          <img src={menuIconClosed} alt="menu icon closed" />
        )}
      </NavbarMenuIcon>
    </NavbarWrapper>
  );
};

export default Navbar;
