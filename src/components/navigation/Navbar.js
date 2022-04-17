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

const DesktopButtonContainer = styled.div``;

const LoginButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  border: none;
  background: none;
  margin: 0 10px;
  padding: 10px 25px;
  cursor: pointer;
`;

const RegisterButton = styled(LoginButton)`
  border: 1px solid #000;
  border-radius: 15px;
  transition: 0.3s;

  &:hover {
    background-color: #000;
    color: #fff;
    transition: 0.3s;
  }
`;

const Navbar = ({ setIsMenuOpen, isDesktop }) => {
  return (
    <NavbarWrapper>
      <NavbarLogo>snap</NavbarLogo>
      {isDesktop ? (
        <DesktopButtonContainer>
          <LoginButton>Login</LoginButton>
          <RegisterButton>Register</RegisterButton>
        </DesktopButtonContainer>
      ) : (
        <NavbarMenuIcon onClick={setIsMenuOpen}>
          <img src={menuIcon} alt="menu icon" />
        </NavbarMenuIcon>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
