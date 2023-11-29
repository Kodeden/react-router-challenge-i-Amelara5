import { Form, useLocation, useNavigation } from "react-router-dom";

function UserInput() {
  const { state } = useLocation();
  const stateOfButton = useNavigation();
  return (
    <Form
      className={"flex flex-col items-center justify-center"}
      method={state ? "PATCH" : "POST"}
      name="userInformation"
    >
      <input
        type="hidden"
        name="id"
        id="id"
        value={state ? state.user.id : ""}
      />
      <label htmlFor="userName">Name</label>
      <input
        className="contactInput"
        type="text"
        name="name"
        id="userName"
        placeholder="Name"
        defaultValue={state ? state.user.name : ""}
      />
      <label htmlFor="userPhone">Phone number</label>
      <input
        className="contactInput"
        type="tel"
        name="tel"
        id="userPhone"
        placeholder="Phone"
        defaultValue={state ? state.user.tel : ""}
      />
      <label htmlFor="userEmail">Email</label>
      <input
        className="contactInput"
        type="email"
        name="email"
        id="userEmail"
        placeholder="Email"
        defaultValue={state ? state.user.email : ""}
      />
      <button className="menuButton" disabled={stateOfButton.state !== "idle"}>
        Save
      </button>
    </Form>
  );
}

export default UserInput;
