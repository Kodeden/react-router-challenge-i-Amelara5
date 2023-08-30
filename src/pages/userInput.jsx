import { Form, useOutletContext } from "react-router-dom";

function UserInput() {
  const [userData] = useOutletContext();
  return (
    <Form className={"flex flex-col items-center justify-center"}>
      <input
        className="contactInput"
        type="text"
        name="userName"
        id="userName"
        placeholder="Name"
      />
      <input
        className="contactInput"
        type="email"
        name="userEmail"
        id="userEmail"
        placeholder="Email"
      />
      <input
        className="contactInput"
        type="tel"
        name="userPhone"
        id="userPhone"
        placeholder="Phone"
      />
      <button className="menuButton">Save</button>
    </Form>
  );
}

export default UserInput;
