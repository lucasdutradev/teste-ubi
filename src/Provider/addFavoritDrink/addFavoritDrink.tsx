import { createContext, useEffect, useState } from "react";
import { DEFAULT_VALUE_FAVOR } from "../../config/defaultValue";
import { PropChild, PropsStateFavor } from "../../interfaces";

export const AddFavorDrinkContext =
  createContext<PropsStateFavor>(DEFAULT_VALUE_FAVOR);

export const AddFavorDrinkProvider = ({ children }: PropChild) => {
  const [myDrinks, setMyDrinks] = useState<Array<{}>>(
    JSON.parse(localStorage.getItem("@UserDrink") || "[]")
  );

  const handleAddLocale = (item: any) => {
    if (!myDrinks.includes(item)) {
      setMyDrinks([...myDrinks, item]);
    }
  };

  useEffect(() => {
    localStorage.setItem("@UserDrink", JSON.stringify(myDrinks));
  }, [myDrinks]);
  return (
    <AddFavorDrinkContext.Provider
      value={{
        myDrinks,
        setMyDrinks,
        handleAddLocale,
      }}
    >
      {children}
    </AddFavorDrinkContext.Provider>
  );
};
