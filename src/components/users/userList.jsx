import { useAsyncValue } from "react-router-dom";
import User from "./userName";

export default function UserList() {
  const list = useAsyncValue();
  return (
    <ul className="flex flex-col items-center justify-center">
      {list.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  );
}
