import styled from "styled-components";
import { GlobalOuter, GlobalInner } from "../styles/GlobalLayout";

const StyledTitle = styled.div`
  width: 100%;
  height: 12.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12.8rem;
`;

export default function Title(props) {
  return(
    <StyledTitle>
      <GlobalOuter>
        <GlobalInner>
          <div>
            <h1>{props.title}</h1>
            <p>{props.explanation}</p>
          </div>
        </GlobalInner>
      </GlobalOuter>
    </StyledTitle>
  );
}