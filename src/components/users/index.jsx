import useOrganizedList from "@hooks/use-organized-list";
import { useAsyncValue } from "react-router-dom";
import User from "./user-name";

export default function UserList() {
  const list = useAsyncValue();
  const { keys, values, setSearch } = useOrganizedList(list);

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
