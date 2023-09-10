import { Form, useOutletContext } from "react-router-dom";

function UserInput() {
  const [userData, setUserData] = useOutletContext();
  return (
    <Form
      className={"flex flex-col items-center justify-center"}
      method={userData ? "PATCH" : "POST"}
    >
      <input
        type="hidden"
        name="id"
        id="id"
        value={userData ? userData.id : ""}
      />
      <input
        className="contactInput"
        type="text"
        name="name"
        id="userName"
        placeholder="Name"
        defaultValue={setUserData ? userData.name : ""}
      />
      <input
        className="contactInput"
        type="tel"
        name="tel"
        id="userPhone"
        placeholder="Phone"
        defaultValue={setUserData ? userData.tel : ""}
      />
      <input
        className="contactInput"
        type="email"
        name="email"
        id="userEmail"
        placeholder="Email"
        defaultValue={setUserData ? userData.email : ""}
      />
      <button className="menuButton">Save</button>
    </Form>
  );
}

export default UserInput;
