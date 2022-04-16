import styled from "styled-components";
import MenuData from "./MenuData";
import menuClosedIcon from "../../images/icon-close-menu.svg";

const MenuDrawer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  height: 100%;
  width: 50%;
`;

const CloseButtonWrapper = styled.div`
  cursor: pointer;
`;

const HeadingWrapper = styled.div``;

const Heading = styled.h3``;

const SubHeading = styled.h4``;

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      {isMenuOpen && (
        <MenuDrawer>
          <CloseButtonWrapper>
            <img src={menuClosedIcon} alt="" onClick={setIsMenuOpen} />
          </CloseButtonWrapper>
          <HeadingWrapper>
            {MenuData.map((heading, index) => {
              return (
                <>
                  <Heading key={index}>{heading.heading}</Heading>
                  <SubHeading>
                    {heading.options &&
                      heading.options.map((option, key) => {
                        return <SubHeading>{option}</SubHeading>;
                      })}
                  </SubHeading>
                </>
              );
            })}
          </HeadingWrapper>
        </MenuDrawer>
      )}
    </>
  );
};

export default Menu;
