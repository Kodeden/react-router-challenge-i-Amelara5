import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Loading from "../components/Loading";
import UserProfile from "../components/users/UserProfile";

function Profile() {
  const user = useLoaderData();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Await resolve={user}>
          <UserProfile />
        </Await>
      </Suspense>
    </>
  );
}

export default Profile;
