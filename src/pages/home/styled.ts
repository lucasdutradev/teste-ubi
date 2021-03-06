import styled from "styled-components";

export const MainContain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://cdn.pixabay.com/photo/2016/11/23/14/49/alcohol-1853327_640.jpg");
  height: 300px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 0 60px 0;

  h2 {
    color: var(--white-default);
    text-align: center;
    font-size: 20px;
    max-width: 320px;
    margin-bottom: 20px;
    font-weight: normal;
  }

  span {
    margin-top: 15px;
    color: var(--white-default);
  }

  .containFilter {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    button {
      cursor: pointer;
      border: none;
      background-color: var(--gold-50);
      border-radius: 5px;
      padding: 5px;
      transition: 0.3s;
    }
    button:hover {
      background-color: var(--white-default);
      color: var(--gold-50);
    }
  }
`;

export const ContainFilter = styled.section`
  margin: 15px 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

export const ContainFilterAlfa = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  button {
    border: none;
    background-color: transparent;
    font-size: 19px;
    color: var(--gold-50);
    font-weight: bold;
  }

  span {
    color: #ccc;
  }
`;

export const SectionContain = styled.section`
  width: 100%;
  max-width: 1030px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const TextContain = styled.div`
  padding: 0 15px;
  margin-bottom: 20px;
  hr {
    width: 40px;
  }

  h2 {
    font-size: 19px;
    letter-spacing: 1px;
  }
`;

export const SectionContainItens = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
`;
