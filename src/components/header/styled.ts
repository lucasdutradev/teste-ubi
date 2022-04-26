import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 50px;
  box-shadow: 0px 1px 4px 0px #ccc;

  h1 {
    font-size: 18px;
    font-weight: normal;
    letter-spacing: 2px;
    color: var(--gold-50);
  }

  .user-click {
    background-color: var(--gray-50);
    width: 35px;
    height: 35px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #a8a8a8;
  }
`;
