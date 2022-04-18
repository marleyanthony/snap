import styled from "styled-components";
import heroImgMobile from "../../images/image-hero-mobile.png";
import heroImgDesktop from "../../images/image-hero-desktop.png";

const HeroImgContainer = styled.div``;

const HeroImg = styled.img`
  width: 100%;
`;

const DesktopHeroImg = styled(HeroImg)`
  width: 50%;
  padding: 0 2rem;
`;

const DesktopWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
`;

const HeadingWrapper = styled.div`
  padding: 0 2rem;
`;

const Heading = styled.h1`
  font-size: 80px;
`;

const SubHeading = styled.p`
  color: #686868;
  font-size: 18px;
  line-height: 28px;
`;

const CTAButton = styled.button`
  background-color: #000;
  border: none;
  color: #fff;
  padding: 1rem 3rem;
  border-radius: 1.5rem;
`;

const Hero = ({ isDesktop }) => {
  return (
    <HeroImgContainer>
      {isDesktop ? (
        <DesktopWrapper>
          <HeadingWrapper>
            <Heading>Make Remote Work</Heading>
            <SubHeading>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </SubHeading>
            <CTAButton>Learn More</CTAButton>
          </HeadingWrapper>
          <DesktopHeroImg src={heroImgDesktop} alt="young man on laptop" />
        </DesktopWrapper>
      ) : (
        <HeroImg src={heroImgMobile} alt="young man on laptop" />
      )}
    </HeroImgContainer>
  );
};

export default Hero;
