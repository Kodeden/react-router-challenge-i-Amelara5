import { useSubmit } from "react-router-dom";

function DeleteButton({ userId }) {
  const submit = useSubmit();

  return (
    <>
      <button
        className="menuButton"
        onClick={() => {
          submit({ id: userId }, { method: "DELETE" });
        }}
      >
        Delete
      </button>
    </>
  );
}

export default DeleteButton;
