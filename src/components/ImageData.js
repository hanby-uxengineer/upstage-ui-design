import { faker } from '@faker-js/faker';
import styled from "styled-components";
import { Card } from "./Card";
import Images from "./Images"

faker.seed(100);

const StyledCard = styled(Card)`
  margin-bottom: 3.2rem;
`;

const ImageContentContainer = styled.div`
  display: flex;
  margin: 1.6rem 0;

  div {
    margin-right: 3.2rem;

    :nth-child(2) {
      p {
        font-weight: 300;
      }
    }
  }
`;

export default function ImageData(props) {
  const score = faker.datatype.float({ "min":0, "max":1, "precision": 0.001 }).toFixed(3);
  const number = faker.datatype.number({ "min":10, "max":100 });

  return(
    <StyledCard>
      <h2>{props.name}</h2>
      <ImageContentContainer>
        <div>
          <p>Score</p>
          <p>Images</p>
        </div>
        <div>
          <p>{score}</p>
          <p>{number}</p>
        </div>
      </ImageContentContainer>
      <Images />
    </StyledCard>
  );
}