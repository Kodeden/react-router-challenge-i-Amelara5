import { useAsyncValue } from "react-router-dom";
import { groupContactsByLetterUsingLastNames } from "../../utils";
import User from "./userName";

export default function UserList() {
  const list = useAsyncValue();
  const orderedList = groupContactsByLetterUsingLastNames(list);

  const keys = Object.keys(orderedList);
  const values = Object.values(orderedList);

  return (
    <div className=" flex flex-col items-center">
      <input
        type="text"
        className="contactInput"
        placeholder="Find ... 🔍"
      ></input>
      {keys.map((letter, index) => {
        return (
          <>
            <h2 className="" key={index}>
              {letter}
            </h2>
            <ul className=" w-60">
              {values[index].map((user) => {
                return <User key={user.id} user={user} />;
              })}
            </ul>
          </>
        );
      })}
    </div>
  );
}
