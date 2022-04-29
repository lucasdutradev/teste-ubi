import { Switch, Route } from "react-router-dom";
import CardPage from "../pages/cardPage";
import HomePage from "../pages/home";
import MyPage from "../pages/myPage";
import NotFoundPage from "../pages/NotFoundPage";

const RoutesDefault = () => (
  <Switch>
    <Route exact path="/cardPage" component={CardPage} />
    <Route exact path="/myPage" component={MyPage} />
    <Route exact path="/" component={HomePage} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);
export default RoutesDefault;
