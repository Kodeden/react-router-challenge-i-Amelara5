import { Link, useNavigation } from "react-router-dom";

function BackButton() {
  const navigation = useNavigation();

  return (
    <Link
      // Don't do anything if we are in a loading state and the user clicks.
      to={navigation.state === "loading" ? null : "/"}
      className="menuButton"
    >
      Back
    </Link>
  );
}

export default BackButton;
