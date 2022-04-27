import ButtonDefault from "../buttonDefault";
import { InputContain } from "./styled";

const InputDefault = () => {
  return (
    <InputContain>
      <input type="text" placeholder="Search your perfect drink." />
      <ButtonDefault>Send</ButtonDefault>
    </InputContain>
  );
};
export default InputDefault;
