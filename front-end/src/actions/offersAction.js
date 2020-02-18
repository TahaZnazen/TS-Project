import {
  GET_POSTS,
  SEARCH,
  COMPANY_OFFERS,
  COMPANY_INFO,
  COMPANY_DASHBOARD,
  GET_COMPANY_OFFERS,
  GET_COMPANY_BY_ID,
  ACCEPT_CONDIDATE,
  REJECT_CONDIDATE,
  ADVANCED_FILTER
} from "./types";
import API from "../API/API";
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
export const advancedFilters = data => dispatch => {
  let fetchedData = [];
  axios
    .post("http://localhost:8080/api/post/category", data)
    .then(res => {
      console.log(res.data.jobs);
      fetchedData = res.data.jobs;
      dispatch({
        type: ADVANCED_FILTER,
        payload: fetchedData
      });
    })
    .catch(err => console.log(err));
};
export const filterPosts = (skills, location, props) => dispatch => {
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
      props.history.push("/Jobs");
    })

    .catch(err => console.log(err));
};
export const filterByCompany = id => dispatch => {
  let fetchedData = [];
  axios
    .get(`http://localhost:8080/api/company/showPosts/${id}`)
    .then(data => {
      console.log(data.data, "///");
      fetchedData = data.data;
      dispatch({
        type: COMPANY_OFFERS,
        payload: fetchedData
      });
    })
    .catch(err => console.log(err));
};
export const findCompany = id => dispatch => {
  let fetchedData = [];
  axios
    .get(`http://localhost:8080/api/company/companyInfo/${id}`)
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
export const companyDashboard = id => dispatch => {
  let fetchedData = [];
  let arr = [];
  axios
    .get(`http://localhost:8080/api/company/candidates/${id}`)
    .then(data => {
      fetchedData = data.data.OffersPostedByTheCompany;
      console.log(fetchedData);
      fetchedData.map(elm => {
        elm.candidates.map(candidates => {
          candidates.offerName = elm.title;
          candidates.offerId = elm._id;
          candidates.companyId = elm.companyName;
          arr.push(candidates);
        });
      });
      console.log(arr);

      dispatch({
        type: COMPANY_DASHBOARD,
        payload: arr
      });
    })
    .catch(err => console.log(err));
};

export const getCompanyJobs = id => dispatch => {
  let fetchedData = [];
  axios
    .get(`http://localhost:8080/api/company/getJobsAndCandidates/${id}`)
    .then(res => {
      console.log(res.data);
      fetchedData = res.data;

      dispatch({
        type: GET_COMPANY_OFFERS,
        payload: fetchedData
      });
    })
    .catch(err => console.log(err));
};

export const acceptCondidate = (
  userId,
  companyId,
  jobId,
  date,
  message
) => async dispatch => {
  let data = {};
  data.userId = userId;
  data.companyId = companyId;
  data.jobId = jobId;
  data.date = date;
  data.message = message;

  console.log(data);
  API.post(`/company/acceptUser/`, data);

  return (dispatch = {
    type: ACCEPT_CONDIDATE
  });
};

export const rejectCondidate = (
  userId,
  companyId,
  jobId,
  message
) => async dispatch => {
  let data = {};
  data.userId = userId;
  data.companyId = companyId;
  data.jobId = jobId;
  data.message = message;
  console.log(data);
  API.post(`/company/rejectUser/`, data);

  return (dispatch = {
    type: REJECT_CONDIDATE
  });
};
