import styled from "styled-components";

export const CardContain = styled.div`
  width: 300px;
  height: 150px;
  background-color: var(--gold-50);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  .imageContain {
    width: 40%;
    border-radius: 10px 0 50px 10px;
    height: 100%;
    background-color: gray;
    transition: 0.3s;
    cursor: pointer;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 10px 0 50px 10px;
      transition: 0.3s;
    }
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
      max-width: 12ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    svg {
      font-size: 25px;
      cursor: pointer;
    }
  }

  :hover > .textContain {
    width: 40%;
  }

  :hover > .imageContain {
    width: 60%;
  }

  :hover > .imageContain img {
    border-radius: 10px;
  }
`;
