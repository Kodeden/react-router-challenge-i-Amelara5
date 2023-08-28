import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Loading from "../components/loading";
import BackButton from "../components/menuButton/backButton";
import DeleteButton from "../components/menuButton/deleteButton";
import EditButton from "../components/menuButton/editButton";
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

      <div className="flex flex-col items-center justify-center">
        <BackButton />
        <EditButton />
        <DeleteButton />
      </div>
    </>
  );
}

export default Profile;
