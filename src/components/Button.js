import styled, { keyframes } from "styled-components";

const Button = styled.button`
  background: #805CFB;
  color: #fff;
  font-size: 1.2rem;
  padding: 1.2rem 2.4rem;
  border-radius: 0.4rem;
  border: 0;
  line-height: 2rem;
  transition: background 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    background: #A69FFF;
    transition: background 0.3s ease-in-out;
  }
`;

const TableButton = styled(Button)`
  background: #ECF1FF;
  color: #717A94;
  font-size: 1rem;
  margin: 0.25rem 0.5rem;
  padding: 0.8rem 2rem;
  line-height: 1rem;
  border-radius: 3rem;

  :hover {
    background: #CCD9FF;
    transition: background 0.3s ease-in-out;
  }
`;

export { Button, TableButton };