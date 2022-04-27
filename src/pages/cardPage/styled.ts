import styled from "styled-components";

export const CardContainer = styled.section`
  margin: 80px auto 0 auto;
  width: 90%;
  max-width: 800px;
  padding: 15px 0;
  background-color: #ccc;
  border-radius: 10px;

  .CardImgContain {
    width: 200px;
    height: 130px;
    background-color: red;
    margin: 0 auto;
    border-radius: 20px;
    transform: translateY(-60px);
    transition: 0.7s;
  }

  .TextContain {
    h2 {
      text-align: center;
      margin-bottom: 8px;
    }
    p {
      margin-bottom: 50px;
    }
    padding: 0 25px;
  }

  .boxButtons {
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* :hover > .CardImgContain {
    transform: translateY(0);
    width: 100%;
    height: 50%;
    border-radius: 0;
  } */
`;
