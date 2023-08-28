import { redirect } from "react-router-dom";
import apiService from "../api.service";

export const ButtonEvent = async ({ request }) => {
  const fd = await request.formData();
  const data = Object.fromEntries(fd);
  switch (request.method) {
    case "PATCH": {
      return redirect("/");
    }
    case "DELETE": {
      apiService.delete(data.id);
      return redirect("/");
    }
  }

  return null;
};
