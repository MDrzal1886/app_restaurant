import "../sass/footer.scss";

const Footer = () => {
  return (
    <footer className="footer text-light">
      <address className="m-0 d-flex flex-column align-items-center">
        <div className="adressContainer d-flex flex-column my-2 text-center">
          <h5 className="titleFontFamyli m-0 fs-1">Adres</h5>
          <p className="m-0">ul. Kwiatowa 17</p>
          <p className="m-0">01-001 Warszawa</p>
        </div>
        <div className="adressContainer d-flex flex-column text-center adressContainer--socials">
          <h5 className="titleFontFamyli m-0 fs-1">Śledź nas</h5>
          <p className="m-0 d-flex justify-content-around">
            <a
              className="fs-1 px-1 text-decoration-none"
              href="https://www.facebook.com/"
              target="_blank https://www.facebook.com/"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="fs-1 px-1 text-decoration-none"
              href="https://twitter.com/"
              target="_blank https://twitter.com/"
            >
              <i className="fab fa-twitter"></i>{" "}
            </a>
            <a
              className="fs-1 px-1 text-decoration-none"
              href="https://www.instagram.com/"
              target="_blank https://www.instagram.com/"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </p>
        </div>
        <div className="adressContainer d-flex flex-column my-2 text-center">
          <h5 className="titleFontFamyli m-0 fs-1">Kontakt</h5>
          <p className="m-0">
            <a className=" text-decoration-none" href="tel:123-456-789">
              123-456-789
            </a>
          </p>
          <p className="m-0">
            <a className=" text-decoration-none" href="mailto:example@mail.com">
              example@mail.com
            </a>
          </p>
        </div>
      </address>
      <div className="copyrights text-center">
        <p className="m-0">
          Burger Pizza Makaron &copy; 2021. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
