import { Link, useNavigation } from "react-router-dom";

function BackButton() {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div to={"/"} className="menuButton">
        Back
      </div>
    );
  }
  return (
    <Link to={"/"} className="menuButton">
      Back
    </Link>
  );
}

export default BackButton;
