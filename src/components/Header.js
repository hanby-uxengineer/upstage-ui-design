import { Link } from "react-router-dom";
import styled from "styled-components";
import upstageLogo from "../images/upstage.png";
import { GlobalInner } from "../styles/GlobalLayout";

const StyledHeader = styled.div`
  width: 100%;
  height: 6.4rem;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #BEADFF -0.6%, #7A9FFF 29.62%, #7B5AFF 61.39%, #2B2FCE 99.42%);

  img {
    width: 10rem;
    height: auto;
    object-fit: cover;
  }
`;

export default function Header() {
  return(
    <StyledHeader>
      <GlobalInner>
        <Link to="/upstage-ui-design"><img src={upstageLogo} alt="upstage logo" /></Link>
      </GlobalInner>
    </StyledHeader>
  );
}