import MainMeal from "./MainMeal";
import { mainMeals } from "../data";
import "../sass/mainMeals.scss";

const MainMeals = () => {
  const mainMealsElements = mainMeals.map((meal) => (
    <MainMeal key={meal.id} {...meal} />
  ));
  return (
    <>
      <h2 className="pb-3 pt-3 text-center titleFontFamyli fs-1">
        Nasze najlepsze dania
      </h2>
      <ul className="list-group list-group-flush">{mainMealsElements}</ul>
    </>
  );
};

export default MainMeals;
