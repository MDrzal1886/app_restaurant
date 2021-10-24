import { Link, useLocation } from "react-router-dom";

import errorImg from "../img/error.svg";

const ErrorPage = () => {
  const location = useLocation();

  const backToMenu =
    location.pathname === "/error" ? (
      <Link
        to="/menu"
        className="text-center d-block text-decoration-underline text-reset m-3"
      >
        Wróć do Menu
      </Link>
    ) : null;

  return (
    <>
      <img src={errorImg} alt="error" className="w-75 m-3 mx-auto d-block" />
      <h1 className="text-center pt-3 titleFontFamyli">
        Nie zanlazłem takiej strony
      </h1>
      {backToMenu}
      <Link
        to="/"
        className="text-center d-block text-decoration-underline text-reset m-3"
      >
        Wróć do strony głównej
      </Link>
    </>
  );
};

export default ErrorPage;
