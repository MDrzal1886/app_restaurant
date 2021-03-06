import { useState } from "react";
import { Prompt } from "react-router";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [validate, setValidate] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [mailValid, setMailValid] = useState(false);
  const [phoneNumberValid, setPhoneNumberValid] = useState(false);
  const [sendMessage, setSendMessage] = useState(false);

  const handlePhoneNumberChange = (event) => {
    const char = event.target.value;
    if (Number(char) || char === "") {
      setPhoneNumber(char);
    }
  };

  const nameValidation = () => {
    if (name === "" || name.length < 3) {
      return "is-invalid";
    } else if (!nameValid) {
      setNameValid(true);
      return "is-valid";
    }
    return "is-valid";
  };
  const mailValidation = () => {
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (mail === "" || regex.test(mail) === false) {
      return "is-invalid";
    } else if (!mailValid) {
      setMailValid(true);
      return "is-valid";
    }
    return "is-valid";
  };

  const phoneNumberValidation = () => {
    if (phoneNumber === "" || phoneNumber.length < 6) {
      return "is-invalid";
    } else if (!phoneNumberValid) {
      setPhoneNumberValid(true);
      return "is-valid";
    }
    return "is-valid";
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    setValidate(true);
    const name = nameValidation();
    const mail = mailValidation();
    const phone = phoneNumberValidation();
    if (name === "is-valid" && mail === "is-valid" && phone === "is-valid") {
      setName("");
      setMail("");
      setPhoneNumber("");
      setMessage("");
      setNameValid(false);
      setMailValid(false);
      setPhoneNumberValid(false);
      setValidate(false);
      setSendMessage(true);
      setTimeout(() => setSendMessage(false), 3000);
    }
  };

  return (
    <form
      className="row g-3 needs-validation m-1 mb-3 contactFormContainer"
      noValidate
    >
      <div className="col-md-4 inputContainer mx-auto">
        <div className="input-group has-validation inputAndValidationContainer">
          <input
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Twoje imi??*"
            className={`form-control shadow-none rounded-0 ${
              validate ? nameValidation() : null
            }`}
            value={name}
          />
          <div className="invalid-feedback m-0">Imi?? jest wymagane</div>
        </div>
      </div>
      <div className="col-md-4 inputContainer mx-auto">
        <div className="input-group has-validation inputAndValidationContainer">
          <input
            onChange={(event) => setMail(event.target.value)}
            type="email"
            placeholder="Tw??j mail*"
            className={`form-control shadow-none rounded-0 ${
              validate ? mailValidation() : null
            }`}
            value={mail}
          />
          <div className="invalid-feedback m-0">Mail jest wymagany</div>
        </div>
      </div>
      <div className="col-md-4 inputContainer mx-auto">
        <div className="input-group has-validation inputAndValidationContainer">
          <input
            onChange={handlePhoneNumberChange}
            type="text"
            placeholder="Tw??j telefon*"
            className={`form-control shadow-none rounded-0 ${
              validate ? phoneNumberValidation() : null
            }`}
            aria-describedby="inputGroupPrepend"
            value={phoneNumber}
          />
          <div className="invalid-feedback m-0">
            Numer telefonu jest wymagany
          </div>
        </div>
      </div>
      <div className="col-md-3 inputContainer mx-auto">
        <textarea
          onChange={(event) => setMessage(event.target.value)}
          type="text"
          placeholder="Twoja wiadomo????"
          className="form-control shadow-none rounded-0 messageArea"
          value={message}
        />
      </div>
      <div className="col-12 text-center">
        {sendMessage ? (
          <p className="text-success sendSuccesMessage">
            Wiadomo???? zosta??a wys??ana. Dzi??kujemy :)
          </p>
        ) : (
          <button
            className="btn btn-dark py-2 px-4 rounded-0"
            type="submit"
            onClick={handleOnClick}
          >
            Wy??lij wiadomo????
          </button>
        )}
      </div>
      <Prompt
        when={
          name.length > 0 ||
          mail.length > 0 ||
          phoneNumber.length > 0 ||
          message.length > 0
        }
        message="Czy na pewno chcesz opu??ci?? t?? stron??? Stracisz wpisane dane."
      />
    </form>
  );
};

export default ContactForm;
