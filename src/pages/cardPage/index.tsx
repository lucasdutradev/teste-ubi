import { useContext } from "react";
import ButtonDefault from "../../components/buttonDefault";
import Header from "../../components/header";
import { DrinkTypeData } from "../../interfaces";
import { AddFavorDrinkContext } from "../../provider/addFavoriteDrink/addFavoriteDrink";
import { SearchDrinkContext } from "../../provider/searchDrink/search";
import { CardContainer } from "./styled";

const CardPage = () => {
  const { drinkInfo } = useContext(SearchDrinkContext) as DrinkTypeData;
  const { handleAddLocale } = useContext(AddFavorDrinkContext);

  const ingredient = Object.entries(drinkInfo)
    .filter((arr) => {
      return arr[0].includes("strIngredient");
    })
    .map((elemn) => elemn[1]);

  return (
    <>
      <Header />
      <CardContainer>
        <div className="CardImgContain">
          <img src={drinkInfo.strDrinkThumb} alt="" />
        </div>
        <div className="TextContain">
          <h2>{drinkInfo.strDrink}</h2>
          <span className="tag">{drinkInfo.strAlcoholic}</span>
          <p>{drinkInfo.strInstructions}</p>
          <div className="ingredientsContain">
            <h3>ingredients:</h3>
            <ul>
              {ingredient.map((elem, index) => (
                <li key={index}>{elem}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="boxButtons">
          <ButtonDefault onClick={() => handleAddLocale(drinkInfo)}>
            Add favorites
          </ButtonDefault>
        </div>
      </CardContainer>
    </>
  );
};

export default CardPage;
