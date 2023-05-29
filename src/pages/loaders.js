import apiService from "../api.service";

const loaders = ({ params }) => {
  const { id } = params;
  const users = id ? apiService.show(id) : apiService.index();
  return users;
};

export default loaders;
