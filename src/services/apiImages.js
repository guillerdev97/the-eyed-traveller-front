import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const apiImages = {
  listImages() {
    return axios.get(baseUrl + "/image/list");
  },

  createImage(data) {
    return axios.post(baseUrl + "/image/create", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  deleteImage(id) {
    return axios.delete(baseUrl + "/image/delete/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
};
