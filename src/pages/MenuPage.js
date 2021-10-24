import { NavLink, Route, useRouteMatch, Switch } from "react-router-dom";
import MainMeals from "../components/MainMeals";
import MealsType from "../components/MealsType";

import "../sass/menuPage.scss";

const MenuPage = () => {
  const { path, url } = useRouteMatch();

  return (
    <div className="menuPageContainer">
      <h1 className="text-center p-3 titleFontFamyli mt-2">Nasze menu</h1>
      <ul className="nav d-flex flex-column flex-sm-row justify-content-around align-items-center mb-1">
        <li className="nav-item">
          <NavLink
            className="nav-link text-center fs-4"
            aria-current="page"
            to={`${url}/burgers`}
          >
            Burgery
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-center fs-4" to={`${url}/pastas`}>
            Makarony
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-center fs-4" to={`${url}/pizza`}>
            Pizza
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-center fs-4" to={`${url}/desserts`}>
            Desery
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/:mealType`} component={MealsType} />
      </Switch>
      <MainMeals />
    </div>
  );
};

export default MenuPage;
