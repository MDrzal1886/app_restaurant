import MainMeals from "./MainMeals";

const Welcome = () => {
  return (
    <section className="text-center">
      <div className="p-3">
        <h1 className="pb-3 titleFontFamyli">Witamy w Burger Pizza Makaron</h1>
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi porro
          ipsam molestiae beatae cum commodi unde laborum. Nihil deserunt
          architecto eligendi dolore ab dolores animi delectus, possimus
          asperiores rem sequi. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quidem quam illum ipsum cumque tenetur voluptatum,
          ipsam facilis minus itaque autem laborum nesciunt nemo nostrum fuga
          eveniet temporibus ex recusandae pariatur?
        </p>
      </div>
      <MainMeals />
    </section>
  );
};

export default Welcome;
