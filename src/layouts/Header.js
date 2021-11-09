import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../img/logo.png";

import "../sass/header.scss";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setShow((prev) => !prev);
  };

  return (
    <header className="header w-100">
      <nav className="navbar navbar-expand-lg navbar-dark p-0">
        <div className="container-fluid p-2 justify-content-center justify-content-sm-between">
          <Link
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              setShow(false);
            }}
            className="navbar-brand m-0"
            to="/"
          >
            <img className="logo d-block" src={logo} alt="restaurant logo" />
          </Link>
          <button
            className="navbar-toggler rounded-0"
            onClick={handleShow}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${
              show ? "show" : ""
            } collapse navbar-collapse justify-content-end`}
            id="navbarNav"
          >
            <ul className="navbar-nav text-center align-items-center">
              <li className="nav-item">
                <NavLink
                  onClick={handleShow}
                  className="nav-link fs-4"
                  exact
                  to="/"
                >
                  Start
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleShow}
                  className="nav-link fs-4"
                  to="/menu"
                >
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleShow}
                  className="nav-link fs-4"
                  to="/about"
                >
                  O nas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleShow}
                  className="nav-link fs-4"
                  to="/gallery"
                >
                  Galeria
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleShow}
                  className="nav-link fs-4"
                  to="/contact"
                >
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
