const Opinion = (opinion) => {
  return (
    <div
      className={`carousel-item ${
        opinion.classActive ? opinion.classActive : ""
      }`}
    >
      <img
        src={opinion.img}
        alt={opinion.name}
        className=" mx-auto d-block opinionImg mt-5"
      />
      <div className="text-center w-75 mx-auto">
        <h5 className="titleFontFamyli">{opinion.name}</h5>
        <p className="opinionDescription px-3">{opinion.opinion}</p>
      </div>
    </div>
  );
};

export default Opinion;
