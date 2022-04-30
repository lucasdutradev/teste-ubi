import { useContext } from "react";
import { PropsNameDrink } from "../../interfaces";
import { SearchDrinkContext } from "../../provider/searchDrink/search";
import ButtonDefault from "../buttonDefault";
import { InputContain } from "./styled";

const InputDefault = ({ nameDrink, setNameDrink }: PropsNameDrink) => {
  const { handleSearch } = useContext(SearchDrinkContext);
  return (
    <InputContain>
      <input
        onChange={(e) => setNameDrink(e.target.value)}
        type="text"
        placeholder="Search your perfect drink."
      />
      <ButtonDefault onClick={() => handleSearch(nameDrink)}>
        Send
      </ButtonDefault>
    </InputContain>
  );
};
export default InputDefault;
