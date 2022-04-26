import styled from "styled-components";

export const InputContain = styled.div`
  background-color: var(--white-default);
  padding: 8px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  :focus-within {
    border: 1px solid var(--gold-50);
  }

  input {
    width: 70%;
    height: 100%;
    border: none;
  }

  input:focus {
    outline: none;
  }

  button {
    width: 30%;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: var(--gold-50);
    color: var(--black-default);
    font-weight: normal;
  }
`;
