import styled from "styled-components";
import { Card } from "./Card";

const StyledCard = styled(Card)`
  margin-bottom: 0;
  border-radius: 1.6rem 1.6rem 0 0;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.3);
  transition: background 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    background: white;
    transition: background 0.3s ease-in-out;
  }
  
`;

export default function AddData() {
  return(
    <StyledCard>
      <h3>+ Add Data</h3>
    </StyledCard>
  );
}