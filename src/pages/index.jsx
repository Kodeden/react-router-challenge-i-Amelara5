import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Loading from "../components/loading";
import UserList from "../components/users/userList";

function Index() {
  const users = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={users}>
        <UserList />
      </Await>
    </Suspense>
  );
}

export default Index;
