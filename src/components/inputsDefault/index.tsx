import { useContext } from "react";
import { SearchDrinkContext } from "../../Provider/searchDrink/search";
import ButtonDefault from "../buttonDefault";
import { InputContain } from "./styled";

interface PropsNameDrink {
  nameDrink: string;
  setNameDrink: (str: string) => void;
}

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
