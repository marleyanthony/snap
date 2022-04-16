import { useState } from "react";
import styled from "styled-components";
import menuIcon from "../../images/icon-menu.svg";
import menuIconClosed from "../../images/icon-close-menu.svg";

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 24px 16px;
`;

const NavbarLogo = styled.div`
  font-size: 35px;
  font-weight: 700;
`;

const NavbarMenuIcon = styled.div`
  display: flex;
  align-items: center;
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
