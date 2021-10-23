import "../sass/banerStickyImage.scss";
import GoToMenuButton from "./GoToMenuButton";

const BanerStickyImage = () => {
  return (
    <div className="banerSticky w-100">
      <div className="banerStickyBackground position-relative">
        <div className="description position-absolute top-50 start-50 translate-middle w-75">
          <h5 className="titleFontFamyli">Odwiedź nas</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            assumenda dignissimos officiis molestias amet, aliquam ipsam qui sit
            neque. Officia, totam sapiente. Debitis tempore aut tempora quae
            consectetur officiis optio.
          </p>
          <GoToMenuButton />
        </div>
      </div>
    </div>
  );
};

export default BanerStickyImage;
