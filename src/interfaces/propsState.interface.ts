import { DrinkType } from "./itensType.interface";

export interface PropsState {
  drinkInfo: DrinkType;
  drink: Array<{}>;
  setDrink: React.Dispatch<React.SetStateAction<{}[]>>;
  setDrinkInfo: (obj: DrinkType) => void;
  handleSearch: (str: string) => void;
  handleSearchByLetter: (str: string) => void;
  handleSearchCategory: (str: string) => void;
  handleSearchById: (str: string) => void;
}

export interface PropsStateFavor {
  myDrinks: Array<{}>;
  setMyDrinks: React.Dispatch<React.SetStateAction<Array<{}>>>;
  handleAddLocale: (item: any) => void;
  handleRemoveLocale: (id: string) => void;
}

export interface PropsNameDrink {
  nameDrink: string;
  setNameDrink: (str: string) => void;
}
