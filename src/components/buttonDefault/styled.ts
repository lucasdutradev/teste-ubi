import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--gold-50);
  border: 2px solid #ccc;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  font-weight: bold;
  color: white;
  transition: 0.3s;

  :hover {
    background-color: var(--white-default);
    color: var(--gold-50);
  }
`;
