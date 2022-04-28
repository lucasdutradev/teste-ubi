import { useContext, useState } from "react";
import CardDrink from "../../components/CardDrink";
import Header from "../../components/header";
import InputDefault from "../../components/inputsDefault";
import { SearchDrinkContext } from "../../Provider/searchDrink/search";
import {
  MainContain,
  SectionContain,
  SectionContainItens,
  TextContain,
} from "./styled";

const HomePage = () => {
  const { drink } = useContext(SearchDrinkContext);
  const [nameDrink, setNameDrink] = useState("");
  return (
    <>
      <Header />
      <MainContain>
        <h2>Your garden with a good alcohol content.</h2>
        <InputDefault setNameDrink={setNameDrink} nameDrink={nameDrink} />
      </MainContain>
      <SectionContain>
        <TextContain>
          <hr />
          <h2>Drinks researched</h2>
        </TextContain>
        <SectionContainItens>
          {drink !== null ? (
            drink.map((obj: any, index) => (
              <CardDrink
                key={index}
                idDrink={obj.idDrink}
                name={obj.strDrink}
                image={obj.strDrinkThumb}
                instruction={{
                  eng: obj.strInstructions,
                  de: obj.strInstructionsDE,
                  it: obj.strInstructionsIT,
                }}
              />
            ))
          ) : (
            <h1>Not found your drink...</h1>
          )}
        </SectionContainItens>
      </SectionContain>
    </>
  );
};

export default HomePage;
