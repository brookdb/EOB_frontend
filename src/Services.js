import axios from "axios";

export const API_BASE_URL = "https://eo-backend-7a2f14a16898.herokuapp.com";

export const fetchPosts = (url) => {
  return axios
    .get(`${API_BASE_URL}/api/posts`)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.response?.data?.message || "Failed to fetch posts");
    });
};

export const fetchPost = (slug) => {
  return axios
    .get(`${API_BASE_URL}/api/posts/${slug}`)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.response?.data?.message || "Failed to fetch post");
    });
};

export const fetchAuthors = (url) => {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.response?.data?.message || "Failed to fetch authors");
    });
}