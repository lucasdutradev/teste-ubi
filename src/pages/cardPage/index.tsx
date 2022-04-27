import Header from "../../components/header";
import { CardContainer } from "./styled";

const CardPage = () => {
  return (
    <>
      <Header />
      <CardContainer>
        <div className="CardImgContain"></div>
        <div className="TextContain">
          <h2>Margarita fds</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            molestiae inventore cum adipisci commodi ab, dolore sequi totam quis
            aliquid repellendus aperiam a ad aliquam dolorem velit iure soluta
            eveniet.
          </p>
        </div>
        <div className="boxButtons">
          <button>ADD Favor</button>
        </div>
      </CardContainer>
    </>
  );
};

export default CardPage;
