import styled from "styled-components";

const SubsectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const Heading = styled.h2`
  margin-top: 40px;
  font-size: 36px;
  font-weight: 700;
`;

const Content = styled.p`
  text-align: center;
  font-weight: 500;
  line-height: 26px;
  margin-bottom: 24px;
`;

const CTAButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const HeroSubsection = () => {
  return (
    <SubsectionWrapper>
      <Heading>Make Remote Work</Heading>
      <Content>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </Content>
      <CTAButton>Learn More</CTAButton>
    </SubsectionWrapper>
  );
};

export default HeroSubsection;
