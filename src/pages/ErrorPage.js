import { Link, useLocation } from "react-router-dom";

import errorImg from "../img/error.svg";

const ErrorPage = () => {
  const location = useLocation();

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const backToMenu =
    location.pathname === "/error" ? (
      <Link
        onClick={handleOnClick}
        to="/menu"
        className="text-center d-block text-decoration-underline text-reset m-3"
      >
        Wróć do Menu
      </Link>
    ) : null;

  return (
    <div className="ErrorContainer d-flex flex-column flex-sm-row align-items-center justify-content-center">
      <img src={errorImg} alt="error" className="w-25 m-3 d-block" />
      <div className="w-50">
        <h1 className="text-center pt-3 titleFontFamyli">
          Nie zanlazłem takiej strony
        </h1>
        {backToMenu}
        <Link
          onClick={handleOnClick}
          to="/"
          className="text-center d-block text-decoration-underline text-reset m-3"
        >
          Wróć do strony głównej
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
