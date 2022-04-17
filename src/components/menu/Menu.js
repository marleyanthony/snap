import styled from "styled-components";
import MenuData from "./MenuData";
import menuClosedIcon from "../../images/icon-close-menu.svg";
import arrowDown from "../../images/icon-arrow-down.svg";
import arrowUp from "../../images/icon-arrow-up.svg";
import todoIcon from "../../images/icon-todo.svg";
import calIcon from "../../images/icon-calendar.svg";
import reminderIcon from "../../images/icon-reminders.svg";
import planningIcon from "../../images/icon-planning.svg";
import { useState } from "react";

const MenuDrawer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const CloseButtonWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const HeadingWrapper = styled.div`
  padding-top: 40px;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const HeadingArrowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Heading = styled.h3`
  color: #686868;
  font-weight: 500;
  font-size: 16px;
  padding-right: 5px;
`;

const SubHeadingContainer = styled.div`
  padding-left: 25px;
`;

const SubHeading = styled(Heading)`
  padding-left: 10px;
`;

const SubHeadingIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const toggleFeaturesOpen = () => {
    setFeaturesOpen(!featuresOpen);
  };

  const toggleCompanyOpen = () => {
    setCompanyOpen(!companyOpen);
  };

  return (
    <>
      {isMenuOpen && (
        <MenuDrawer>
          <CloseButtonWrapper>
            <img src={menuClosedIcon} alt="" onClick={setIsMenuOpen} />
          </CloseButtonWrapper>
          <HeadingWrapper>
            <HeadingContainer>
              <HeadingArrowContainer onClick={toggleFeaturesOpen}>
                <Heading>Features</Heading>
                {featuresOpen ? (
                  <img src={arrowUp} alt="arrow icon up" />
                ) : (
                  <img src={arrowDown} alt="arrow icon down" />
                )}
              </HeadingArrowContainer>
              {featuresOpen && (
                <SubHeadingContainer>
                  <SubHeadingIconWrapper>
                    <img src={todoIcon} alt="todo list icon" />
                    <SubHeading>Todo List</SubHeading>
                  </SubHeadingIconWrapper>
                  <SubHeadingIconWrapper>
                    <img src={calIcon} alt="calendar icon" />
                    <SubHeading>Calendar</SubHeading>
                  </SubHeadingIconWrapper>
                  <SubHeadingIconWrapper>
                    <img src={reminderIcon} alt="reminders icon" />
                    <SubHeading>Reminders</SubHeading>
                  </SubHeadingIconWrapper>
                  <SubHeadingIconWrapper>
                    <img src={planningIcon} alt="planning icon" />
                    <SubHeading>Planning</SubHeading>
                  </SubHeadingIconWrapper>
                </SubHeadingContainer>
              )}
            </HeadingContainer>
            <HeadingContainer>
              <HeadingArrowContainer onClick={toggleCompanyOpen}>
                <Heading>Company</Heading>
                {companyOpen ? (
                  <img src={arrowUp} alt="arrow icon up" />
                ) : (
                  <img src={arrowDown} alt="arrow icon down" />
                )}
              </HeadingArrowContainer>
              {companyOpen && (
                <SubHeadingContainer>
                  <SubHeading>History</SubHeading>
                  <SubHeading>Our Team</SubHeading>
                  <SubHeading>Blog</SubHeading>
                </SubHeadingContainer>
              )}
            </HeadingContainer>
            <HeadingContainer>
              <Heading>Careers</Heading>
            </HeadingContainer>
            <HeadingContainer>
              <Heading>About</Heading>
            </HeadingContainer>
          </HeadingWrapper>
        </MenuDrawer>
      )}
    </>
  );
};

export default Menu;
