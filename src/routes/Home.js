import styled from "styled-components";
import Header from "../components/Header";
import Title from "../components/Title";
import Data from "../components/Data";
import { GlobalOuter, GlobalInner } from "../styles/GlobalLayout";

const StyledHome = styled.div`
  width: 100%;
  min-height: calc(100vh - 10rem);
`;

export default function Home() {
  
  return (
    <StyledHome>
      <Header />
      <Title title="Model" explanation="모델간 성능 점수를 비교하여 배포하기"/>
      <GlobalOuter>
        <GlobalInner>
            <Data />
        </GlobalInner>
      </GlobalOuter>
    </StyledHome>
  );
}