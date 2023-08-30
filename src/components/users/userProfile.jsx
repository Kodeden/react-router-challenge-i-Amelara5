import { useAsyncValue } from "react-router-dom";
import BackButton from "../menuButton/backButton";
import DeleteButton from "../menuButton/deleteButton";
import EditButton from "../menuButton/editButton";

function Profile() {
  const user = useAsyncValue();
  return (
    <>
      <div className="m-1 flex flex-col items-center justify-center">
        {/* <div>{user.id}</div> */}
        <div>{user.name}</div>
        <div>{user.tel}</div>
        <div>{user.email}</div>
        <img src={user.img} alt="Profile" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <BackButton />
        <EditButton user={user} />
        <DeleteButton userId={user.id} />
      </div>
    </>
  );
}

export default Profile;
