import { PropChild } from "../interfaces";
import { SearchDrinkProvider } from "./searchDrink/search";

const Provider = ({ children }: PropChild) => {
  return <SearchDrinkProvider>{children}</SearchDrinkProvider>;
};

export default Provider;
