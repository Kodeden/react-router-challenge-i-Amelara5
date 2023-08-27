function UserInput() {
  return (
    <div className={"flex flex-col items-center justify-center"}>
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
    </div>
  );
}

export default UserInput;
