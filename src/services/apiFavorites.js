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

  listMyImages() {
    return axios.get(baseUrl + "/image/listmy", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  listOtherImages() {
    return axios.get(baseUrl + "/image/listother", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  deleteFavImage(id) {
    return axios.delete(baseUrl + "/image/favorite/delete/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  addFavImage(id) {
    return axios.get(baseUrl + "/image/favorite/add/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
};
