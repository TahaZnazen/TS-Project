import { GET_POSTS, SEARCH } from "./types";
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
