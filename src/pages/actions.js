import { redirect } from "react-router-dom";

export const ButtonEvent = async ({ request }) => {
  //   const fd = await request.formData();
  switch (request.method) {
    case "PATCH": {
      console.log("In PATCH");
      return redirect("/");
    }
  }

  return null;
};