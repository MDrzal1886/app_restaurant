const Opinion = (opinion) => {
  return (
    <div
      className={`carousel-item ${
        opinion.classActive ? opinion.classActive : null
      }`}
      data-bs-interval="10000"
    >
      <img
        src={opinion.img}
        alt={opinion.name}
        className=" mx-auto d-block opinionImg mt-5"
      />
      <div className="text-center w-75 mx-auto">
        <h5 className="titleFontFamyli fs-3">{opinion.name}</h5>
        <p className="opinionDescription">{opinion.opinion}</p>
      </div>
    </div>
  );
};

export default Opinion;
