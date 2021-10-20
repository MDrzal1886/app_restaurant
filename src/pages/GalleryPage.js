import { SRLWrapper } from "simple-react-lightbox";
import GalleryElement from "../components/GalleryElement";

import { gallery } from "../data";

const GalleryPage = () => {
  const galleryElements = gallery.map((image) => (
    <GalleryElement key={image.id} {...image} />
  ));

  return (
    <>
      <h1 className="text-center p-3 titleFontFamyli">Galeria</h1>
      <SRLWrapper>
        <div className="d-flex flex-column justify-content-between">
          {galleryElements}
        </div>
      </SRLWrapper>
    </>
  );
};

export default GalleryPage;
