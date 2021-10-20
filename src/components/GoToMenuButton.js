import { useHistory } from "react-router";

const GoToMenuButton = () => {
  const history = useHistory();
  const handleOnClick = () => {
    window.scrollTo(0, 0);
    history.push("/menu");
  };
  return (
    <button
      className="btn btn-light btn-sm rounded-0  fs-6 px-3 py-2"
      onClick={handleOnClick}
    >
      Nasze Menu
    </button>
  );
};

export default GoToMenuButton;
