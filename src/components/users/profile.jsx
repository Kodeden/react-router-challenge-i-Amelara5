function User({ user }) {
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

export default User;
