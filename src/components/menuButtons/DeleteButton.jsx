import { useNavigation, useSubmit } from "react-router-dom";

function DeleteButton({ userId }) {
  const submit = useSubmit();
  const navigation = useNavigation();

  return (
    <button
      className="menuButton"
      onClick={() => {
        submit({ id: userId }, { method: "DELETE" });
      }}
      disabled={navigation.state !== "idle"}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
