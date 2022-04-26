import { CardContain } from "./styled";
import { GrAddCircle } from "react-icons/gr";

const CardDrink = () => {
  return (
    <CardContain>
      <h1>Img</h1>
      <div className="textContain">
        <h2>Name of drink.</h2>
        <GrAddCircle />
      </div>
    </CardContain>
  );
};

export default CardDrink;
