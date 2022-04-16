import styled from "styled-components";
import audiophileSVG from "../../images/client-audiophile.svg";
import databizSVG from "../../images/client-databiz.svg";
import makerSVG from "../../images/client-maker.svg";
import meetSVG from "../../images/client-meet.svg";

const SponsorLogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin-top: 48px;
`;

const Sponsors = () => {
  return (
    <SponsorLogoWrapper>
      <img src={audiophileSVG} alt="audiophile client icon" />
      <img src={databizSVG} alt="databiz client icon" />
      <img src={makerSVG} alt="maker client icon" />
      <img src={meetSVG} alt="meet client icon" />
    </SponsorLogoWrapper>
  );
};

export default Sponsors;
