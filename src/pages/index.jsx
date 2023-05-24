import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
// import Error from "../components/error";
import UserList from "../components/users/userList";

function Index() {
  const users = useLoaderData();

  return (
    <Suspense>
      <Await resolve={users}>
        <UserList />
      </Await>
    </Suspense>
  );
}

export default Index;
