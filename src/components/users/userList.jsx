import { useAsyncValue } from "react-router-dom";
import User from "./userName";

export default function UserList() {
  const list = useAsyncValue();
  return (
    <ul>
      {list.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  );
}
