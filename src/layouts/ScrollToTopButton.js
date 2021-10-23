import { useState } from "react";
import { useEffect } from "react";
import "../sass/scrollToTopButton.scss";

const ScrollToTopButton = () => {
  const [scrollPos, setScrollPos] = useState(0);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollPos(window.scrollY));
    return window.removeEventListener("scroll", () =>
      setScrollPos(window.scrollY)
    );
  }, []);

  const toggleScrollActiveClass = scrollPos > 150 ? "activeScroll" : "";
  const isDisabled = scrollPos > 150 ? false : true;

  return (
    <button
      onClick={handleClick}
      className={`scrollToTopButton ${toggleScrollActiveClass} d-lg-none m-0 p-0 fs-1 border-0 position-fixed`}
      disabled={isDisabled}
    >
      <i className="fas fa-sort-up"></i>
    </button>
  );
};

export default ScrollToTopButton;
