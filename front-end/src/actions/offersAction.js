import {
  GET_POSTS,
  SEARCH,
  COMPANY_OFFERS,
  COMPANY_INFO,
  COMPANY_DASHBOARD
} from "./types";
import axios from "axios";
export const getPosts = () => async dispatch => {
  try {
    const res = await fetch("http://localhost:8080/api/post/showPosts");
    const data = await res.json();
    console.log(data);
    dispatch({
      type: GET_POSTS,
      payload: data
    });
  } catch (err) {
    console.log(err);
  }
};
export const filterPosts = (skills, location) => dispatch => {
  let fetchedData = [];
  axios
    .post("http://localhost:8080/api/post/search", {
      skills: skills,
      location: location
    })
    .then(data => {
      console.log(data.data);
      fetchedData = data.data;
      dispatch({
        type: SEARCH,
        payload: fetchedData
      });
    })
    .catch(err => console.log(err));
};
export const filterByCompany = () => dispatch => {
  let fetchedData = [];
  axios
    .get("http://localhost:8080/api/company/showPosts/5e317ff8059a3a57a4d3639d")
    .then(data => {
      console.log(data.data);
      fetchedData = data.data;
      dispatch({
        type: COMPANY_OFFERS,
        payload: fetchedData
      });
    })
    .catch(err => console.log(err));
};
export const findCompany = () => dispatch => {
  let fetchedData = [];
  axios
    .get(
      "http://localhost:8080/api/company/companyInfo/5e317ff8059a3a57a4d3639d"
    )
    .then(data => {
      fetchedData = data.data;
      console.log(fetchedData);
      dispatch({
        type: COMPANY_INFO,
        payload: fetchedData
      });
    })
    .catch(err => console.log(err));
};
export const companyDashboard = () => dispatch => {
  let fetchedData = [];
  axios
    .get(
      "http://localhost:8080/api/company/candidates/5e317ff8059a3a57a4d3639d"
    )
    .then(data => {
      fetchedData = data.data;
      console.log(fetchedData);
      dispatch({
        type: COMPANY_DASHBOARD,
        payload: fetchedData
      });
    })
    .catch(err => console.log(err));
};
