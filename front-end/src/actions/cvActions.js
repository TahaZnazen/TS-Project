import API from "../API/API";
import {
  FETCH_CV,
  ADD_EXPERIENCE,
  ADD_SKILL,
  ADD_LANGUAGE,
  ADD_EDUCATION,
  ADD_INFO,
  DEL_SKILL,
  DEL_LANGUAGE,
  DEL_EDUCATION,
  DEL_EXPERIENCE
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

//////////////////////////// Experience //////////////////////////
//add one experience
export const addExperience = (id, data) => async dispatch => {
  API.post(`/cvs/${id}/addExperience`, data);

  return (dispatch = {
    type: ADD_EXPERIENCE
  });
};

//delete selected experience
export const deleteExperience = (idCv, idExperience) => async dispatch => {
  API.delete(`/cvs/${idCv}/experience/${idExperience}`);
  return (dispatch = {
    type: DEL_EXPERIENCE
  });
};

//update one experience
export const UpdateExperience = () => {
  return {
    type: "UPDATE_EXPERIENCE"
  };
};

//////////////////////////// SKILLS //////////////////////////

//Add SKILL
export const addSkill = (id, data) => async dispatch => {
  let skill = {};
  skill.data = data;
  API.post(`/cvs/${id}/addSkill`, skill);

  return (dispatch = {
    type: ADD_SKILL
  });
};
//DEL SKILL
export const deleteSkill = (idCv, idSkill) => async dispatch => {
  API.delete(`/cvs/${idCv}/skill/${idSkill}`);
  return (dispatch = {
    type: DEL_SKILL
  });
};
//update  SKILL
export const UpdateSKILL = () => {
  return {
    type: "UPDATE_EXPERIENCE"
  };
};

//////////////////////////// LANGUAGE //////////////////////////

// Add Language
export const addLanguage = (id, data) => async dispatch => {
  let language = {};
  language.data = data;
  API.post(`/cvs/${id}/addLanguage`, language);

  return (dispatch = {
    type: ADD_LANGUAGE
  });
};

// DEL language
export const deleteLanguage = (idCv, languageId) => async dispatch => {
  API.delete(`/cvs/${idCv}/language/${languageId}`);
  return (dispatch = {
    type: DEL_LANGUAGE
  });
};
//update  language
export const UpdateLanguage = () => {
  return {
    type: "UPDATE_EXPERIENCE"
  };
};

//////////////////////////// EDUCATION //////////////////////////

//Add Education
export const addEducation = (id, data) => async dispatch => {
  let education = {};
  education.data = data;
  API.post(`/cvs/${id}/addEducation`, education);

  return (dispatch = {
    type: ADD_EDUCATION
  });
};
//Del Education
export const deleteEducation = (idCv, educationId) => async dispatch => {
  console.log("education", idCv, educationId);
  API.delete(`/cvs/${idCv}/education/${educationId}`);
  return (dispatch = {
    type: DEL_EDUCATION
  });
};

//update education
export const updateEducation = () => {
  return {
    type: "UPDATE_EXPERIENCE"
  };
};

// complete information

//update/iduser
export const addInfo = (id, data) => async dispatch => {
  console.log(id);
  API.patch(`/users/update/${id}`, data);
  return (dispatch = {
    type: ADD_INFO
  });
};
