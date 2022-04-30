import { PropChild } from "../../interfaces";
import { Button } from "./styled";

const ButtonDefault = ({ children, ...rest }: PropChild) => {
  return <Button {...rest}>{children}</Button>;
};

export default ButtonDefault;
