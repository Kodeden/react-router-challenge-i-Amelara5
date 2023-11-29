import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Loading from "../components/loading";
import UserProfile from "../components/users/user-profile";

function Profile() {
  const user = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={user}>
        <UserProfile />
      </Await>
    </Suspense>
  );
}

export default Profile;
