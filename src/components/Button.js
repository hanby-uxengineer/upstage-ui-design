import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
      opacity: 0.5;
  }
`;

const Button = styled.button`
  background: #805CFB;
  color: #fff;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border-radius: 1.6rem;
  border: 0;

  :hover {
    cursor: pointer;
    animation: ${fadeOut} 0.3s ease-in-out forwards;
  }

`;

const TableButton = styled(Button)`
  font-size: 1rem;
  margin: 0 0.5rem;
  padding: 1rem 2rem;
  border-radius: 3rem;
`;

export { Button, TableButton };