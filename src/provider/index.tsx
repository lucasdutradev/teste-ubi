import { PropChild } from "../interfaces";
import { AddFavorDrinkProvider } from "./addFavoriteDrink/addFavoriteDrink";
import { SearchDrinkProvider } from "./searchDrink/search";

const Provider = ({ children }: PropChild) => (
  <SearchDrinkProvider>
    <AddFavorDrinkProvider>{children}</AddFavorDrinkProvider>
  </SearchDrinkProvider>
);

export default Provider;
