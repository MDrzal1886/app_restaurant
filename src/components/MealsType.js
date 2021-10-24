import { useParams, useHistory } from "react-router";
import MealType from "./MealType";

import { burgers, pastas, pizza, desserts } from "../data";

const MealsType = () => {
  const { mealType } = useParams();
  const history = useHistory();

  const type = () => {
    switch (mealType) {
      case "burgers":
        return burgers;
      case "pastas":
        return pastas;
      case "pizza":
        return pizza;
      case "desserts":
        return desserts;
      default:
        return false;
    }
  };

  const mealsTypeElements = type()
    ? type().map((meal) => <MealType key={meal.id} {...meal} />)
    : history.push("/error");
  return (
    <ul className="list-group list-group-flush d-flex flex-column flex-sm-row justify-content-around flex-wrap">
      {mealsTypeElements}
    </ul>
  );
};

export default MealsType;
