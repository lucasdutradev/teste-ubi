import styled from "styled-components";

export const CardContain = styled.div`
  width: 300px;
  height: 150px;
  background-color: var(--white-honey);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  h1 {
    width: 40%;
    border-radius: 10px 0 50px 10px;
    height: 100%;
    background-color: gray;
    transition: 0.3s;
  }

  .textContain {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    border-radius: 10px;
    width: 60%;
    height: 100%;
    transition: 0.3s;

    h2 {
      font-size: 13px;
    }

    svg {
      font-size: 25px;
      cursor: pointer;
    }
  }

  :hover > .textContain {
    width: 40%;
  }

  :hover > h1 {
    border-radius: 10px;
    width: 60%;
  }
`;
