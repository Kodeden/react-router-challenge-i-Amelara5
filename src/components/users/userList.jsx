import { useAsyncValue } from "react-router-dom";
import User from "./user";

export default function userList() {
  const values = useAsyncValue();
  return (
    <ul>
      {values.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  );
}
