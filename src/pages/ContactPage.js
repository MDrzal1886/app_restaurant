import ContactForm from "../components/ContactForm";

import "../sass/contactPage.scss";

const ContactPage = () => {
  return (
    <div className="contactPageContainer">
      <h1 className="text-center pt-3 titleFontFamyli">Kontakt</h1>
      <p className="p-3 pt-0 m-0 text-center w-75 mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est impedit
        eligendi consequatur possimus voluptas. Recusandae aliquid dignissimos,
        ab similique iusto maiores nisi consequuntur laudantium quam ea fugiat
        quae deserunt iste!
      </p>
      <div className="d-flex flex-column flex-sm-row contactContainer">
        <div className="phoneAndMailContainers">
          <i className="fas fa-phone-square mx-auto d-block contactIcon"></i>
          <h3 className="text-center titleFontFamyli fs-1">Telefon</h3>
          <p className="text-center w-75 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            animi tempore iste eius, magni asperiores consectetur.
          </p>
          <p className="text-center adressData fs-5 fw-bold">123-456-789</p>
        </div>
        <div className="phoneAndMailContainers">
          <i className="fas fa-envelope mx-auto d-block contactIcon"></i>
          <h3 className="text-center titleFontFamyli fs-1">Mail</h3>
          <p className="text-center w-75 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            animi tempore iste eius, magni asperiores consectetur.
          </p>
          <p className="text-center adressData fs-5 fw-bold">
            example@mail.com
          </p>
        </div>
      </div>
      <h2 className="text-center pt-3 titleFontFamyli fs-1">
        Formularz kontaktowy
      </h2>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
