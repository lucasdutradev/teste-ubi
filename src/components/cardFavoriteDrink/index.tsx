import { CardContain } from "./styled";
import { GrSubtractCircle } from "react-icons/gr";
import { PropsItens } from "../../interfaces";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { SearchDrinkContext } from "../../provider/searchDrink/search";
import { AddFavorDrinkContext } from "../../provider/addFavoriteDrink/addFavoriteDrink";

const CardFavoriteDrink = ({ item, idDrink, name, image }: PropsItens) => {
  const { setDrinkInfo } = useContext(SearchDrinkContext);
  const { handleRemoveLocale } = useContext(AddFavorDrinkContext);
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
        <GrSubtractCircle onClick={() => handleRemoveLocale(idDrink)} />
      </div>
    </CardContain>
  );
};

export default CardFavoriteDrink;
