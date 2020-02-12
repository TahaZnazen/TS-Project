import axios from "axios";
import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  COMPANY_LOGIN_SUCCESS,
  COMPANY_REGISTER_SUCCESS,
  LOGOUT,
  LOGIN_FAIL,
  UPDATE_COMAPY_INFO,
  UPDATE_COMAPY_PASSWORD
} from "./types";

export const loginAuth = (data, props) => dispatch => {
  axios
    .post("http://localhost:8080/api/users/login", data)
    .then(res => {
      console.log(res.data.err);
      if (res.data.err) {
        dispatch({
          type: LOGIN_FAIL,
          payload: "invalid information"
        });
      } else {
        let fetchedData = res.data;
        let token = localStorage.setItem("token", res.data.token);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: fetchedData
        });

        res.data.status === "success" && props.history.push("/Jobs");
      }
    })
    .catch(err => console.log(err));
};

export const registerAuth = (data, props) => dispatch => {
  axios
    .post("http://localhost:8080/api/users/signup", data)
    .then(res => {
      console.log(res.data);

      if (res.data.err) {
        dispatch({
          type: LOGIN_FAIL,
          payload: "invalid information"
        });
      } else {
        console.log(res.data);
        let fetchedData = res.data;
        let token = localStorage.setItem("token", res.data.token);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: fetchedData
        });
        res.data.status === "success" && this.props.history.push("/Employee");
      }
    })
    .catch(err => console.log(err));
};
export const companyLoginAuth = (data, props) => dispatch => {
  axios
    .post("http://localhost:8080/api/company/login-company", data)
    .then(res => {
      if (res.data.err) {
        dispatch({
          type: LOGIN_FAIL,
          payload: "invalid information"
        });
      } else {
        console.log(res.data);
        let fetchedData = res.data;
        let token = localStorage.setItem("token", res.data.token);
        dispatch({
          type: COMPANY_LOGIN_SUCCESS,
          payload: fetchedData
        });
        props.history.push("/company");
      }
    })
    .catch(err => console.log(err));
};

export const companyRegisterAuth = (data, props) => dispatch => {
  axios
    .post("http://localhost:8080/api/company/signup-company", data)
    .then(res => {
      if (res.data.err) {
        dispatch({
          type: LOGIN_FAIL,
          payload: "invalid information"
        });
      } else {
        console.log(res.data);
        let fetchedData = res.data;
        let token = localStorage.setItem("token", res.data.token);
        dispatch({
          type: COMPANY_REGISTER_SUCCESS,
          payload: fetchedData
        });
        res.data.status === "success" && props.history.push("/Employers");
      }
    })
    .catch(err => console.log(err));
};
export const logout = props => dispatch => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT
  });
  props.history.push("/");
  // props.history.push("/");
};

export const changePassword = (id, data) => dispatch => {
  console.log(id, data);
  //axios.post(`http://localhost:8080/api/users/updatePassword/${id}`, data);

  return dispatch({
    type: UPDATE_COMAPY_PASSWORD,
    payload: ""
  });
};

export const UpdateComapanyInfo = (data, id) => dispatch => {
  console.log(id, data);
  //axios.patch(`http://localhost:8080/api/users/update/${id}`, data);
  return dispatch({
    type: UPDATE_COMAPY_INFO,
    payload: ""
  });
};
