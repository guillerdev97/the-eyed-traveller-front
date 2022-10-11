import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const apiAuth = {
  // no auth
  register(data) {
    return axios.post(baseUrl + "/register", data, {});
  },

  // no auth
  login(data) {
    return axios.post(baseUrl + "/login", data).catch((error) => {
      return error.response.data.msg;
    });
  },

  // auth
  logout() {
    return axios.get(baseUrl + "/logout", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
};
