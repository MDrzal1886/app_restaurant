import Opinions from "../components/Opinions";
import aboutImage from "../img/aboutImage.jpg";

import "../sass/aboutPage.scss";

const AboutPage = () => {
  return (
    <div className="aboutPageContainer">
      <h1 className="text-center pt-3 titleFontFamyli">Kim jesteśmy?</h1>
      <div className="imageAndTextContainer d-flex flex-column flex-lg-row">
        <div className="imgContainer">
          <img src={aboutImage} alt="Kucharze" className="img-fluid p-3" />
        </div>
        <div className="descriptionContainer">
          <h2 className="text-center pt-3 titleFontFamyli fs-1">
            Klika słów o nas
          </h2>
          <h5 className="ps-3 titleFontFamyli fs-3">Nasze doświadczenie</h5>
          <p className="px-3 m-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
            impedit eligendi consequatur possimus voluptas. Recusandae aliquid
            dignissimos, ab similique iusto maiores nisi consequuntur laudantium
            quam ea fugiat quae deserunt iste!
          </p>
          <p className="px-3 m-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            vitae quam, porro unde distinctio, veritatis dolore voluptatem ullam
            minima ex hic necessitatibus. Natus debitis nostrum consequatur
            sint! Iste, esse ratione!
          </p>
          <h5 className="ps-3 pt-2 titleFontFamyli fs-3">
            Dlaczego warto nas odwiedzić
          </h5>
          <p className="px-3 m-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            vitae quam, porro unde distinctio, veritatis dolore voluptatem ullam
            minima ex hic necessitatibus. Natus debitis nostrum consequatur
            sint! Iste, esse ratione!
          </p>
        </div>
      </div>
      <h3 className="text-center pt-3 mb-4 titleFontFamyli fs-1">Opinie</h3>
      <Opinions />
    </div>
  );
};

export default AboutPage;
