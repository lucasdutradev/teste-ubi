import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DrinkTypeData } from "../interfaces";
import CardPage from "../pages/cardPage";
import HomePage from "../pages/home";
import MyPage from "../pages/myPage";
import NotFoundPage from "../pages/NotFoundPage";
import { SearchDrinkContext } from "../provider/searchDrink/search";

const RoutesDefault = () => {
  const { drinkInfo } = useContext(SearchDrinkContext) as DrinkTypeData;

  return (
    <Switch>
      <Route exact path="/cardPage">
        {drinkInfo.idDrink === "" ? <Redirect to="/" /> : <CardPage />}
      </Route>
      <Route exact path="/myPage" component={MyPage} />
      <Route exact path="/" component={HomePage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default RoutesDefault;
