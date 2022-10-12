import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const apiFavorites = {
  trendingImages() {
    return axios.get(baseUrl + "/image/favorite/trending", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
};
