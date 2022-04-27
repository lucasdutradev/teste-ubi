import { Switch, Route } from "react-router-dom";
import CardPage from "../pages/cardPage";
import HomePage from "../pages/home";
import NotFoundPage from "../pages/NotFoundPage";

const RoutesDefault = () => (
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/cardPage" component={CardPage} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);
export default RoutesDefault;
