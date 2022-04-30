import { useContext, useState } from "react";
import CardDrink from "../../components/cardDrink";
import Header from "../../components/header";
import InputDefault from "../../components/inputsDefault";
import { alfabetic } from "../../config/alfabetic";
import { SearchDrinkContext } from "../../provider/searchDrink/search";
import {
  ContainFilter,
  ContainFilterAlfa,
  MainContain,
  SectionContain,
  SectionContainItens,
  TextContain,
} from "./styled";

const HomePage = () => {
  const { drink, handleSearchByLetter, handleSearchCategory } =
    useContext(SearchDrinkContext);
  const [nameDrink, setNameDrink] = useState("");

  return (
    <>
      <Header />
      <MainContain>
        <h2>Your garden with a good alcohol content.</h2>
        <InputDefault setNameDrink={setNameDrink} nameDrink={nameDrink} />
        <div className="containFilter">
          <button onClick={() => handleSearchCategory("Ordinary_Drink")}>
            Ordinary_Drink
          </button>
          <button onClick={() => handleSearchCategory("Cocktail")}>
            Cocktail
          </button>
        </div>
      </MainContain>
      <SectionContain>
        <TextContain>
          <hr />
          <h2>Drinks researched</h2>
        </TextContain>
        <ContainFilter>
          {alfabetic.map((letter, index) => (
            <ContainFilterAlfa key={index}>
              <button onClick={() => handleSearchByLetter(letter)}>
                {letter}
              </button>
              <span>/</span>
            </ContainFilterAlfa>
          ))}
        </ContainFilter>

        <SectionContainItens>
          {drink[0] !== undefined ? (
            drink.map((obj: any, index) => (
              <CardDrink
                key={index}
                item={obj}
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
