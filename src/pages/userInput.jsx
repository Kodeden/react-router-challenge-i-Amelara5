import { Form, useOutletContext } from "react-router-dom";

function UserInput() {
  const [userData, setUserData] = useOutletContext();
  return (
    <Form className={"flex flex-col items-center justify-center"}>
      <input
        className="contactInput"
        type="text"
        name="userName"
        id="userName"
        placeholder="Name"
        defaultValue={setUserData ? userData.name : ""}
      />
      <input
        className="contactInput"
        type="email"
        name="userEmail"
        id="userEmail"
        placeholder="Email"
        defaultValue={setUserData ? userData.email : ""}
      />
      <input
        className="contactInput"
        type="tel"
        name="userPhone"
        id="userPhone"
        placeholder="Phone"
        defaultValue={setUserData ? userData.tel : ""}
      />
      <button className="menuButton">Save</button>
    </Form>
  );
}

export default UserInput;
