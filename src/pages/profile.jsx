import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import UserProfile from "../components/users/userProfile";
import Loading from "../components/loading";

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
