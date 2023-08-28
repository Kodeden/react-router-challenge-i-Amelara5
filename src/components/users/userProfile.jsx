import { useAsyncValue } from "react-router-dom";

function Profile() {
  const user = useAsyncValue();
  return (
    <div className="m-1 flex flex-col items-center justify-center">
      {/* <div>{user.id}</div> */}
      <div>{user.name}</div>
      <div>{user.tel}</div>
      <div>{user.email}</div>
      <img src={user.img} alt="Profile" />
    </div>
  );
}

export default Profile;
