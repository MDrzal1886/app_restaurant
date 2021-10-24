import { SRLWrapper } from "simple-react-lightbox";
import GalleryElement from "../components/GalleryElement";

import { gallery } from "../data";

import "../sass/galleryPage.scss";

const GalleryPage = () => {
  const galleryElements = gallery.map((image) => (
    <GalleryElement key={image.id} {...image} />
  ));

  return (
    <div className="galleryContainer">
      <h1 className="text-center p-3 titleFontFamyli">Galeria</h1>
      <SRLWrapper>
        <div className="d-flex flex-column flex-sm-row justify-content-around flex-wrap">
          {galleryElements}
        </div>
      </SRLWrapper>
    </div>
  );
};

export default GalleryPage;
