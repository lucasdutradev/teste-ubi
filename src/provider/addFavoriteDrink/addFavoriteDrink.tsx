import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DEFAULT_VALUE_FAVOR } from "../../config/defaultValue";
import { PropChild, PropsStateFavor } from "../../interfaces";

export const AddFavorDrinkContext =
  createContext<PropsStateFavor>(DEFAULT_VALUE_FAVOR);

export const AddFavorDrinkProvider = ({ children }: PropChild) => {
  const [myDrinks, setMyDrinks] = useState<Array<{}>>(
    JSON.parse(localStorage.getItem("@UserDrink") || "[]")
  );

  const handleAddLocale = (item: any) => {
    const isIncluded = myDrinks.find(
      (drink: any) => drink.idDrink === item.idDrink
    );
    if (!isIncluded) {
      setMyDrinks([...myDrinks, item]);
      toast.success("Drink added in your favorite list.");
    } else {
      toast.error("Drink was added before.");
    }
  };

  const handleRemoveLocale = (id: any) => {
    setMyDrinks(myDrinks.filter((drink: any) => drink.idDrink !== id));
    toast.success("Drink removed from your favorite list.");
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
        handleRemoveLocale,
      }}
    >
      {children}
    </AddFavorDrinkContext.Provider>
  );
};
