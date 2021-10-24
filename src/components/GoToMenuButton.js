import { useHistory } from "react-router";

import "../sass/goToMenuButton.scss";

const GoToMenuButton = ({ type }) => {
  const history = useHistory();
  const handleOnClick = () => {
    window.scrollTo(0, 0);
    history.push(type ? `/menu/${type}` : "/menu");
  };
  return (
    <button
      className="btn btn-light btn-sm rounded-0 px-4 py-2 goToMenuBtn"
      onClick={handleOnClick}
    >
      Nasze Menu
    </button>
  );
};

export default GoToMenuButton;
