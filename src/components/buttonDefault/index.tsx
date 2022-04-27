import { Button } from "./styled";

interface PropsButton {
  children: JSX.Element | string;
}

const ButtonDefault = ({ children }: PropsButton) => {
  return <Button>{children}</Button>;
};

export default ButtonDefault;
