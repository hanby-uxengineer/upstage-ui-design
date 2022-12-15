import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
      opacity: 0.5;
  }
`;

const TableButton = styled.button`
  background: #805CFB;
  color: #fff;
  font-size: 1rem;
  margin: 0 0.5rem;
  padding: 1rem 2rem;
  border-radius: 3rem;
  border: 0;

  :hover {
    cursor: pointer;
    animation: ${fadeOut} 0.3s ease-in-out forwards;
  }
`;

export { TableButton };