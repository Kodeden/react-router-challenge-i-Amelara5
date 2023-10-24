import {
  alphabetizeContactsByLastName,
  groupContactsByLetterUsingLastNames,
} from "@utils";
import { useState } from "react";
import { useAsyncValue } from "react-router-dom";

function useOrganizeList() {
  const [search, setSearch] = useState("");

  const list = useAsyncValue();

  const orderedList = groupContactsByLetterUsingLastNames(
    alphabetizeContactsByLastName(
      list.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    )
  );

  const keys = Object.keys(orderedList);
  const values = Object.values(orderedList);

  return { keys, values, setSearch };
}

export default useOrganizeList;
