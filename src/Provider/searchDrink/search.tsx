import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { PropChild } from "../../interfaces";

interface PropsState {
  drink: Array<{}>;
  setDrink: React.Dispatch<React.SetStateAction<Array<{}>>>;
  handleSearch: (str: string) => void;
}

const DEFAULT_VALUE = {
  drink: [],
  setDrink: () => {},
  handleSearch: () => {},
};

export const SearchDrinkContext = createContext<PropsState>(DEFAULT_VALUE);

export const SearchDrinkProvider = ({ children }: PropChild) => {
  const [drink, setDrink] = useState<Array<{}>>([]);

  const handleSearch = (drinkName = "margarita") => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
      )
      .then((resp) => {
        setDrink(resp.data.drinks);
      })
      .catch((_) => setDrink([]));
  };
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <SearchDrinkContext.Provider value={{ drink, setDrink, handleSearch }}>
      {children}
    </SearchDrinkContext.Provider>
  );
};
