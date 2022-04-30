import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { DEFAULT_VALUE } from "../../config/defaultValue";
import { PropChild, PropsState } from "../../interfaces";

export const SearchDrinkContext = createContext<PropsState>(DEFAULT_VALUE);

export const SearchDrinkProvider = ({ children }: PropChild) => {
  const [drink, setDrink] = useState<Array<{}>>([]);
  const [drinkInfo, setDrinkInfo] = useState(DEFAULT_VALUE.drinkInfo);

  const handleSearchById = (id: string) => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((resp) => {
        // removendo informacoes "null" da API
        const drinksArray = resp.data.drinks.map((elementDrink: any) => {
          return {
            ...Object.keys(elementDrink).reduce((acc: any, key) => {
              if (elementDrink[key] !== null) {
                acc = { ...acc, [key]: elementDrink[key] };
              }
              return acc;
            }, {}),
          };
        });
        setDrinkInfo(drinksArray[0]);
      })
      .catch((_) => setDrinkInfo(DEFAULT_VALUE.drinkInfo));
  };

  const handleSearch = (drinkName = "margarita") => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
      )
      .then((resp) => {
        // removendo informacoes "null" da API
        const drinksArray = resp.data.drinks.map((elementDrink: any) => {
          return {
            ...Object.keys(elementDrink).reduce((acc: any, key) => {
              if (elementDrink[key] !== null) {
                acc = { ...acc, [key]: elementDrink[key] };
              }
              return acc;
            }, {}),
          };
        });
        setDrink(drinksArray);
      })
      .catch((_) => setDrink([]));
  };

  const handleSearchCategory = (categoryName: string) => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`
      )
      .then((resp) => {
        setDrink(resp.data.drinks);
      })
      .catch((_) => setDrink([]));
  };

  const handleSearchByLetter = (drinkLetter: string) => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${drinkLetter}`
      )
      .then((resp) => {
        // removendo informacoes "null" da API
        const drinksArray = resp.data.drinks.map((elementDrink: any) => {
          return {
            ...Object.keys(elementDrink).reduce((acc: any, key) => {
              if (elementDrink[key] !== null) {
                acc = { ...acc, [key]: elementDrink[key] };
              }
              return acc;
            }, {}),
          };
        });
        setDrink(drinksArray);
      })
      .catch((_) => setDrink([]));
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <SearchDrinkContext.Provider
      value={{
        drink,
        setDrink,
        handleSearch,
        drinkInfo,
        setDrinkInfo,
        handleSearchByLetter,
        handleSearchCategory,
        handleSearchById,
      }}
    >
      {children}
    </SearchDrinkContext.Provider>
  );
};
