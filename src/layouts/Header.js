import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../img/logo.png";

import "../sass/header.scss";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow((prev) => !prev);

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark p-0">
        <div className="container-fluid justify-content-end p-2">
          <Link
            onClick={() => setShow(false)}
            className="navbar-brand m-0"
            to="/"
          >
            <img
              className=" d-block w-50 mx-auto"
              src={logo}
              alt="restaurant logo"
            />
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
              <li className="nav-item w-75">
                <NavLink
                  onClick={handleShow}
                  className="nav-link fs-5"
                  exact
                  to="/"
                >
                  Start
                </NavLink>
              </li>
              <li className="nav-item w-75">
                <NavLink
                  onClick={handleShow}
                  className="nav-link fs-5"
                  to="/menu"
                >
                  Menu
                </NavLink>
              </li>
              <li className="nav-item w-75">
                <NavLink
                  onClick={handleShow}
                  className="nav-link fs-5"
                  to="/about"
                >
                  O nas
                </NavLink>
              </li>
              <li className="nav-item w-75">
                <NavLink
                  onClick={handleShow}
                  className="nav-link fs-5"
                  to="/gallery"
                >
                  Galeria
                </NavLink>
              </li>
              <li className="nav-item w-75">
                <NavLink
                  onClick={handleShow}
                  className="nav-link fs-5"
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
