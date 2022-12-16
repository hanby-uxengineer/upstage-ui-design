import { useState } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { Button } from "./Button";
import { faker } from "@faker-js/faker";

faker.seed(10);

const StyledCard = styled(Card)`
  width: 50%;
  height: 42rem;
  margin-bottom: 2rem;
  position: sticky;
  top: 3.2rem;

  @media only screen and (max-width: 904px) {
    width: 100%;
    position: unset;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 1.6rem 0 14.2rem 0;

  div {
    margin-right: 3.2rem;

    :nth-child(2) {
      p {
        font-weight: 300;
      }
    }
  }

  p {
    margin-left: 0;
    margin-bottom: 1.2rem;
  }
`;

export default function ModelInfo() {
  return(
    <StyledCard>
      <h2>Model Info</h2>
      <InfoContainer>
        <div>
          <p>Speed</p>
          <p>GPU Status</p>
          <p>Memory</p>
          <p>Creation Date</p>
        </div>
        <div>
          <p>10p/ms</p>
          <p>3 unit(s) 96GB memory</p>
          <p>1.45GB</p>
          <p>2022-01-01 00:00:00</p>
        </div>
      </InfoContainer>
      <Button>Additional Information</Button>
    </StyledCard>
  );
}