import { useAsyncValue } from "react-router-dom";
import {
  BackButton,
  EditButton,
  DeleteButton,
} from "../menuButtons/MenuDirectory";

function Profile() {
  const user = useAsyncValue();
  return (
    <>
      <main className="m-1 flex flex-col items-center justify-center">
        {/* <div>{user.id}</div> */}
        <div>{user.name}</div>
        <div>{user.tel}</div>
        <div>{user.email}</div>
        <img src={user.img} alt="Profile" />
      </main>
      <div className="flex flex-col items-center justify-center">
        <BackButton />
        <EditButton user={user} />
        <DeleteButton userId={user.id} />
      </div>
    </>
  );
}

export default Profile;
