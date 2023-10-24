import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/error";
import UserList from "../components/users/UserList";

function Index() {
  const { data } = useLoaderData();

  return (
    <Suspense
      fallback={
        <div className="flex justify-center">
          <Loading />
        </div>
      }
    >
      <Await resolve={data} errorElement={<Error />}>
        <UserList />
      </Await>
    </Suspense>
  );
}

export default Index;
