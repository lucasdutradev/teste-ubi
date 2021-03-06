import styled from "styled-components";

export const ContainDrinks = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .containDrinks {
    max-width: 1200px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: 70px;
  }

  .containTitle {
    width: 100%;
    max-width: 1000px;
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
  }

  @media screen and (min-width: 769px) {
    .containTitle {
      width: 90%;
      flex-direction: row;
    }
  }
`;
