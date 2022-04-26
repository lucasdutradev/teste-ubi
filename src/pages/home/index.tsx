import CardDrink from "../../components/CardDrink";
import Header from "../../components/header";
import InputDefault from "../../components/inputsDefault";
import {
  MainContain,
  SectionContain,
  SectionContainItens,
  TextContain,
} from "./styled";

const arr = [1, 2, 3, 4, 5];

const HomePage = () => {
  return (
    <>
      <Header />
      <MainContain>
        <h2>Your garden with a good alcohol content.</h2>
        <InputDefault />
      </MainContain>
      <SectionContain>
        <TextContain>
          <hr />
          <h2>Drinks researched</h2>
        </TextContain>
        <SectionContainItens>
          {arr.map((item) => (
            <CardDrink />
          ))}
        </SectionContainItens>
      </SectionContain>
    </>
  );
};

export default HomePage;
