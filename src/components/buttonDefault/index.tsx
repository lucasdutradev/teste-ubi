import { Button } from "./styled";

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | string;
}

const ButtonDefault = ({ children, ...rest }: PropsButton) => {
  return <Button {...rest}>{children}</Button>;
};

export default ButtonDefault;
