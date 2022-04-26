import { InputContain } from "./styled";

const InputDefault = () => {
  return (
    <InputContain>
      <input type="text" placeholder="Search your perfect drink." />
      <button>Send</button>
    </InputContain>
  );
};
export default InputDefault;
