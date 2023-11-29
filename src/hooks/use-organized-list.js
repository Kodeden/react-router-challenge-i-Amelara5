import { useState } from "react";
import { groupContactsByLetterUsingLastNames } from "../utils";

function useOrganizeList(list) {
  const [search, setSearch] = useState("");

  const orderedList = groupContactsByLetterUsingLastNames(
    list.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    ),
  );

  const keys = Object.keys(orderedList);
  const values = Object.values(orderedList);

  return { keys, values, setSearch };
}

export default useOrganizeList;
