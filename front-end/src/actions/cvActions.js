import API from "../API/API";
import {
  FETCH_CV,
  ADD_EXPERIENCE,
  ADD_SKILL,
  ADD_LANGUAGE,
  ADD_EDUCATION,
  ADD_INFO
} from "./types";

//function return function that return an actions
export const fetchUserCv = () => async dispatch => {
  const response = await API.get(`/cvs/5e32e9fe0e58762ad85f5089`);
  return dispatch({
    type: FETCH_CV,
    payload: response.data.data
  });
};

//delete element from cv
export const deleteCV = () => {
  return {
    type: "DELETE_CV"
  };
};
//create cv for one user
export const createCV = () => {
  return {
    type: "CREATE_CV"
  };
};

//add one experience
export const addExperience = (id, data) => async dispatch => {
  API.post(`/cvs/${id}/addExperience`, data);

  return (dispatch = {
    type: ADD_EXPERIENCE
  });
};

//delete selected experience
export const deleteExperience = () => {
  return {
    type: "DELETE_EXPERIENCE"
  };
};

//update one experience
export const UpdateExperience = () => {
  return {
    type: "UPDATE_EXPERIENCE"
  };
};

// SKILLS
export const addSkill = (id, data) => async dispatch => {
  let skill = {};
  skill.data = data;
  API.post(`/cvs/${id}/addSkill`, skill);

  return (dispatch = {
    type: ADD_SKILL
  });
};

// Language
export const addLanguage = (id, data) => async dispatch => {
  let language = {};
  language.data = data;
  API.post(`/cvs/${id}/addLanguage`, language);

  return (dispatch = {
    type: ADD_LANGUAGE
  });
};

// Education
export const addEducation = (id, data) => async dispatch => {
  let education = {};
  education.data = data;
  API.post(`/cvs/${id}/addEducation`, education);

  return (dispatch = {
    type: ADD_EDUCATION
  });
};

// complete information

//update/iduser
export const addInfo = (id, data) => async dispatch => {
  API.patch(`/users/update/${id}`, data);
  return (dispatch = {
    type: ADD_INFO
  });
};
