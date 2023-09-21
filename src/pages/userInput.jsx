import { Form, useLocation } from "react-router-dom";

function UserInput() {
  const { state } = useLocation();
  return (
    <Form
      className={"flex flex-col items-center justify-center"}
      method={state ? "PATCH" : "POST"}
    >
      <input
        type="hidden"
        name="id"
        id="id"
        value={state ? state.user.id : ""}
      />
      <input
        className="contactInput"
        type="text"
        name="name"
        id="userName"
        placeholder="Name"
        defaultValue={state ? state.user.name : ""}
      />
      <input
        className="contactInput"
        type="tel"
        name="tel"
        id="userPhone"
        placeholder="Phone"
        defaultValue={state ? state.user.tel : ""}
      />
      <input
        className="contactInput"
        type="email"
        name="email"
        id="userEmail"
        placeholder="Email"
        defaultValue={state ? state.user.email : ""}
      />
      <button className="menuButton">Save</button>
    </Form>
  );
}

export default UserInput;
