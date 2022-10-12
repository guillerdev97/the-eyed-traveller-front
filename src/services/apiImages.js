import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const apiImages = {
  listImages() {
    return axios.get(baseUrl + "/image/list");
  },
};
