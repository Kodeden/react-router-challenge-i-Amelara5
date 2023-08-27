import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Loading from "../components/loading";
import BackButton from "../components/menuButton/backButton";
import UserProfile from "../components/users/userProfile";

function Profile() {
  const user = useLoaderData();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Await resolve={user}>
          <UserProfile />
        </Await>
      </Suspense>

      <BackButton />
    </>
  );
}

export default Profile;
