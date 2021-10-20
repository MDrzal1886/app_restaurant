import Opinions from "../components/Opinions";
import aboutImage from "../img/aboutImage.jpg";

const AboutPage = () => {
  return (
    <>
      <h1 className="text-center pt-3 titleFontFamyli">Kim jesteśmy?</h1>
      <img src={aboutImage} alt="Kucharze" className="img-fluid p-3" />
      <h2 className="text-center pt-3 titleFontFamyli fs-1">
        Klika słów o nas
      </h2>
      <h5 className="ps-3 titleFontFamyli fs-3">Nasze doświadczenie</h5>
      <p className="p-3 pt-0 pt-0 m-0">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est impedit
        eligendi consequatur possimus voluptas. Recusandae aliquid dignissimos,
        ab similique iusto maiores nisi consequuntur laudantium quam ea fugiat
        quae deserunt iste!
      </p>
      <p className="p-3 pt-0 m-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        vitae quam, porro unde distinctio, veritatis dolore voluptatem ullam
        minima ex hic necessitatibus. Natus debitis nostrum consequatur sint!
        Iste, esse ratione!
      </p>
      <h5 className="ps-3 titleFontFamyli fs-3">
        Dlaczego warto nas odwiedzić
      </h5>
      <p className="p-3 pt-0 m-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        vitae quam, porro unde distinctio, veritatis dolore voluptatem ullam
        minima ex hic necessitatibus. Natus debitis nostrum consequatur sint!
        Iste, esse ratione!
      </p>
      <h3 className="text-center pt-3 mb-4 titleFontFamyli fs-1">Opinie</h3>
      <Opinions />
    </>
  );
};

export default AboutPage;
