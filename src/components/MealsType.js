import MealType from "./MealType";

const MealsType = ({ type }) => {
  const mealsTypeElements = type.map((meal) => (
    <MealType key={meal.id} {...meal} />
  ));
  return <ul className="list-group list-group-flush">{mealsTypeElements}</ul>;
};

export default MealsType;
