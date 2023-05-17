import { defer } from "react-router-dom";
import index from "../api.service";

export default function loaders() {
  const users = index();

  return defer({ users });
}
