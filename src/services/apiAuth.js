import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const apiAuth = {
  register(data) {
    return axios.post(baseUrl + "/register", data, {});
  },

  login(data) {
    return axios.post(baseUrl + "/login", data).catch((error) => {
      return error.response.data.msg;
    });
  },

  logout() {
    return axios.get(baseUrl + "/logout", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  deleteUser(id) {
    return axios.delete(baseUrl + "/user/delete/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  updateUser(id, data) {
    return axios.patch(baseUrl + "/user/update/" + id, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  userProfile() {
    return axios.get(baseUrl + "/user/profile/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
};
