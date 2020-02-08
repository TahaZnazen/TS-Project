import axios from "axios";
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "./types";

export const loginAuth = (data, props) => dispatch => {
  axios
    .post("http://localhost:8080/api/users/login", data)
    .then(res => {
      console.log(res.data);
      let fetchedData = res.data;
      let token = localStorage.setItem("token", res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: fetchedData
      });
      props.history.push("/Jobs");
    })
    .catch(err => console.log(err));
};

export const registerAuth = (data, props) => dispatch => {
  axios
    .post("http://localhost:8080/api/users/signup", data)
    .then(res => {
      console.log(res.data);
      let fetchedData = res.data;
      let token = localStorage.setItem("token", res.data.token);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: fetchedData
      });
      props.history.push("/dashBoard");
    })
    .catch(err => console.log(err));
};
