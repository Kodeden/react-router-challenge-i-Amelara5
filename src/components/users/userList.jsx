import { useState } from "react";
import { useAsyncValue } from "react-router-dom";
import { groupContactsByLetterUsingLastNames } from "../../utils";
import User from "./userName";

export default function UserList() {
  const list = useAsyncValue();

  const [search, setSearch] = useState("");

  const orderedList = groupContactsByLetterUsingLastNames(
    list.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    )
  );

  const keys = Object.keys(orderedList);
  const values = Object.values(orderedList);

  return (
    <div className=" flex flex-col items-center">
      <input
        type="text"
        className="contactInput"
        placeholder="Find ... 🔍"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      ></input>
      {keys.map((letter, index) => {
        return (
          <div key={index + 50}>
            <h2 className="" key={index}>
              {letter}
            </h2>
            <ul className=" w-60">
              {values[index].map((user) => {
                return <User key={user.id} user={user} />;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
