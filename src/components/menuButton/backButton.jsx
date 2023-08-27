import { useSubmit } from "react-router-dom";

function BackButton() {
  const submit = useSubmit();
  return (
    <>
      <button
        className="menuButton"
        onClick={() => {
          submit(null, { method: "PATCH" });
        }}
      >
        Back
      </button>
    </>
  );
}

export default BackButton;
