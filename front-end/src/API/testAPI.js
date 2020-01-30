import axios from "axios";

const TestAPI = axios.create({
  baseURL: "http://localhost:8080/api/"
});

export default TestAPI;
