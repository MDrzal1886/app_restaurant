import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
import MainMeals from "../components/MainMeals";
import MealsType from "../components/MealsType";

import "../sass/menuPage.scss";

const MenuPage = () => {
  const { path, url } = useRouteMatch();

  return (
    <div className="menuPageContainer">
      <h1 className="text-center p-3 titleFontFamyli">Nasze menu</h1>
      <ul className="nav d-flex flex-column flex-sm-row justify-content-around">
        <li className="nav-item">
          <Link
            className="nav-link text-center text-reset fs-4"
            aria-current="page"
            to={`${url}/burgers`}
          >
            Burgery
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-center text-reset fs-4"
            to={`${url}/pastas`}
          >
            Makarony
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-center text-reset fs-4"
            to={`${url}/pizza`}
          >
            Pizza
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-center text-reset fs-4"
            to={`${url}/desserts`}
          >
            Desery
          </Link>
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
