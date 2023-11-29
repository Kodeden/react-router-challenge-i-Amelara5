import { useState } from "react";
import {
  alphabetizeContactsByLastName,
  groupContactsByLetterUsingLastNames,
} from "../utils";

function useOrganizeList(list) {
  const [search, setSearch] = useState("");

  const alphabetizedOrderedList = groupContactsByLetterUsingLastNames(
    alphabetizeContactsByLastName(
      list.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()),
      ),
    ),
  );

  const keys = Object.keys(alphabetizedOrderedList);
  const values = Object.values(alphabetizedOrderedList);

  return { keys, values, setSearch };
}

export default useOrganizeList;
