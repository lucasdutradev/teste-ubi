import { CardContain } from "./styled";
import { GrAddCircle } from "react-icons/gr";
import { PropsItens } from "../../interfaces";

const CardDrink = ({ idDrink, name, image, instruction }: PropsItens) => {
  return (
    <CardContain>
      <div className="imageContain">
        <img src={image} alt={name} />
      </div>
      <div className="textContain">
        <h2>{name}</h2>
        <GrAddCircle />
      </div>
    </CardContain>
  );
};

export default CardDrink;
