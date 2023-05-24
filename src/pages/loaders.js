import apiService from "../api.service";

function loaders() {
  const users = apiService.index();
  return users;
}

export default loaders;
