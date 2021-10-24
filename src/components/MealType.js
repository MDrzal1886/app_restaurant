const MealType = (meal) => {
  return (
    <li className="list-group-item">
      <div>
        <img
          src={meal.img}
          alt={meal.name}
          className="img-thumbnail border-0 mx-auto d-block"
        />
        <div className="d-flex justify-content-between">
          <h3 className="titleFontFamyli fs-3">{meal.name}</h3>
          <h3 className="titleFontFamyli fs-3 ps-1">{meal.price}zł</h3>
        </div>
        <p>{meal.ingredients}</p>
      </div>
    </li>
  );
};

export default MealType;
