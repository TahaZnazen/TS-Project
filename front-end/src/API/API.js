import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/"
  //baseURL: "https://jsonplaceholder.typicode.com/"
});

export default API;
