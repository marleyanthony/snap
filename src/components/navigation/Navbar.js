import styled from "styled-components";
import menuIcon from "../../images/icon-menu.svg";

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

const Navbar = ({ setIsMenuOpen }) => {
  return (
    <NavbarWrapper>
      <NavbarLogo>snap</NavbarLogo>
      <NavbarMenuIcon onClick={setIsMenuOpen}>
        <img src={menuIcon} alt="menu icon" />
      </NavbarMenuIcon>
    </NavbarWrapper>
  );
};

export default Navbar;
