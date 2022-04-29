import { PropChild } from "../interfaces";
import { AddFavorDrinkProvider } from "./addFavoritDrink/addFavoritDrink";
import { SearchDrinkProvider } from "./searchDrink/search";

const Provider = ({ children }: PropChild) => {
  return (
    <SearchDrinkProvider>
      <AddFavorDrinkProvider>{children}</AddFavorDrinkProvider>
    </SearchDrinkProvider>
  );
};

export default Provider;
