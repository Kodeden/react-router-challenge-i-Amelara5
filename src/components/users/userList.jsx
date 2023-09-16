import { useAsyncValue } from "react-router-dom";
import { groupContactsByLetterUsingLastNames } from "../../utils";
import User from "./userName";

export default function UserList() {
  const list = useAsyncValue();
  const orderedList = groupContactsByLetterUsingLastNames(list);

  // console.log(list);
  // console.log(groupContactsByLetterUsingLastNames(list));
  const keys = Object.keys(orderedList);
  const values = Object.values(orderedList);

  function letterDivision() {
    // for (const element in orderedList) {
    //   // console.log(element);
    // }

    Object.keys(orderedList).map((letter, index) => {
      console.log(values[index]);
      return console.log(`The LETTER IS ${letter} and the INDEX is ${index}`);
    });
    // const entries = Object.entries(orderedList);

    // Object.entries(orderedList).map((letter, value) => {
    //   return console.log(`The LETTER is ${letter} and VALUE is ${value}`);
    // });

    console.log(keys, "THIS IS KEYS");
    console.log(values, "THIS IS VALUES");
    // console.log(entries, "THIS IS ENTRIES");
  }
  letterDivision();

  // return (
  //   <ul className="flex flex-col items-center justify-center">
  //     {list.map((user) => (
  //       <User key={user.id} user={user} />
  //     ))}
  //   </ul>
  // );

  return (
    <>
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
              <ul>
                {values[index].map((user) => {
                  return <User key={user.id} user={user} />;
                })}
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
}
