import styled from "styled-components";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import Title from "../components/Title"
import { GlobalOuter, GlobalInner } from "../styles/GlobalLayout";
import ImageData from "../components/ImageData";
import AddData from "../components/AddData";
import ModelInfo from "../components/ModelInfo";
import { useState } from "react";

const StyledDetail = styled.div`
  width: 100%;
  min-height: calc(100vh - 10rem);
`;

const StyledGlobalInner = styled(GlobalInner)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3.2rem;

  @media only screen and (max-width: 904px) {
    flex-direction: column-reverse;
  }
`;

const ImageDataContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 904px) {
    width: 100%;
  }
`;

export default function Detail() {
  const [data, setData] = useState([
    "Data A", "Data B", "Data C", "Data D", "Data E", "Data F", "My Data",
  ]);

  return(
    <StyledDetail>
      <Header />
      <Navigator />
      <Title title="Model-00" explanation="모델의 기본 정보와 모델을 학습시키는 데 사용된 이미지 데이터를 확인할 수 있습니다"/>
      <GlobalOuter>
        <StyledGlobalInner>
          <ImageDataContainer>
            {
              data.map((item) => 
                <ImageData key={item} name={item} />
              )
            }
            <AddData />
          </ImageDataContainer>
          <ModelInfo />
        </StyledGlobalInner>
      </GlobalOuter>
    </StyledDetail>
  );
}