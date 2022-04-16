import styled from "styled-components";
import heroImgMobile from "../../images/image-hero-mobile.png";

const HeroImgContainer = styled.div``;

const HeroImg = styled.img`
  width: 100%;
`;

const Hero = () => {
  return (
    <HeroImgContainer>
      <HeroImg src={heroImgMobile} alt="young man on laptop" />
    </HeroImgContainer>
  );
};

export default Hero;
