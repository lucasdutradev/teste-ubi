import { useContext } from "react";
import { useHistory } from "react-router-dom";
import ButtonDefault from "../../components/buttonDefault";
import CardDrink from "../../components/cardDrink";
import CardFavoriteDrink from "../../components/cardFavoriteDrink";
import Header from "../../components/header";
import { AddFavorDrinkContext } from "../../Provider/addFavoritDrink/addFavoritDrink";
import { ContainDrinks } from "./styled";

const MyPage = () => {
  const { myDrinks } = useContext(AddFavorDrinkContext);
  const history = useHistory();
  const handleSubmit = () => {
    return history.push("/");
  };
  return (
    <>
      <Header />
      <ContainDrinks>
        <div className="containTitle">
          <ButtonDefault onClick={handleSubmit}>Back Home</ButtonDefault>
          <h1>Your perfect drinks</h1>
        </div>
        <div className="containDrinks">
          {myDrinks !== null ? (
            myDrinks.map((obj: any, index) => (
              <CardFavoriteDrink
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
            <h1>nothing added yet...</h1>
          )}
        </div>
      </ContainDrinks>
    </>
  );
};

export default MyPage;
