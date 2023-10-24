import { defer } from "react-router-dom";
import apiService from "../api.service";

const loaders = ({ params }) => {
  const { id } = params;
  const data = id ? apiService.show(id) : apiService.index();

  return defer({ data });
};

export default loaders;
