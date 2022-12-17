import styled from "styled-components";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import Title from "../components/Title";
import Data from "../components/Data";
import { GlobalOuter, GlobalInner } from "../styles/GlobalLayout";

const StyledHome = styled.div`
  width: 100%;
  min-height: calc(100vh - 12.8rem);
`;

export default function Home() {
  
  return (
    <StyledHome>
      <Header />
      <Navigator selected="true"/>
      <Title title="Model Dashboard" explanation="광학문자인식(OCR) 모델간 성능 점수를 비교하여 배포할 수 있습니다"/>
      <GlobalOuter>
        <GlobalInner>
            <Data />
        </GlobalInner>
      </GlobalOuter>
    </StyledHome>
  );
}