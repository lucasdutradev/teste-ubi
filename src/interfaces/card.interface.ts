export interface PropsItens
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  item: {};
  idDrink: string;
  name: string;
  image: string;
  instruction: {
    eng: string;
    de: string;
    it: string;
  };
}
