const MainMeal = (meal) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <img className="mainMealImg pe-2" src={meal.img} alt={meal.name} />
      <div className="mainMealDescription text-start">
        <h4 className="m-0 titleFontFamyli fs-4 pb-1">{meal.name}</h4>
        <p className="m-0">{meal.ingredients}</p>
        <p className="m-0 titleFontFamyli fs-4 text-end pe-3">{meal.price}zł</p>
      </div>
    </li>
  );
};

export default MainMeal;
