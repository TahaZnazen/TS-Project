import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/",
  headers: { "X-Requested-With": "XMLHttpRequest" }
});

export default API;
