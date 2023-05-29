import { useAsyncValue } from "react-router-dom";

function Profile() {
  const user = useAsyncValue();
  return (
    <>
      <div>{user.id}</div>
      <div>{user.name}</div>
      <div>{user.tel}</div>
      <div>{user.email}</div>
      <img src={user.img} alt="Profile" />
    </>
  );
}

export default Profile;
