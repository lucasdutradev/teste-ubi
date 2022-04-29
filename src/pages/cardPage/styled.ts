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
    margin: 0 auto;
    transform: translateY(-60px);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  .TextContain {
    .tag {
      display: inline-block;
      background-color: var(--gold-50);
      padding: 5px;
      margin-bottom: 5px;
    }
    h2 {
      text-align: center;
      margin-bottom: 8px;
    }
    p {
      margin-bottom: 50px 0;
    }
    padding: 0 25px;

    .ingredientsContain {
      margin: 15px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      ul {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        gap: 15px;
      }

      li {
        margin: 10px 0;
        list-style: none;
        background-color: white;
        padding: 5px;
      }
    }
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
