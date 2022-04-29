import { CardContain } from "./styled";
import { GrAddCircle } from "react-icons/gr";
import { PropsItens } from "../../interfaces";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { SearchDrinkContext } from "../../Provider/searchDrink/search";
import { AddFavorDrinkContext } from "../../Provider/addFavoritDrink/addFavoritDrink";

const CardDrink = ({ item, idDrink, name, image, instruction }: PropsItens) => {
  const { setDrinkInfo } = useContext(SearchDrinkContext);
  const { handleAddLocale } = useContext(AddFavorDrinkContext);
  const history = useHistory();
  const handleSubmit = (obj: any) => {
    setDrinkInfo(obj);
    return history.push("/cardPage");
  };
  return (
    <CardContain>
      <div onClick={() => handleSubmit(item)} className="imageContain">
        <img src={image} alt={name} />
      </div>
      <div className="textContain">
        <h2>{name}</h2>
        <GrAddCircle onClick={() => handleAddLocale(item)} />
      </div>
    </CardContain>
  );
};

export default CardDrink;
