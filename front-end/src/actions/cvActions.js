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
  DEL_EXPERIENCE,
  UPDATE_EXPERIENCE,
  UPDATE_SKILL,
  UPDATE_LANGUAGE,
  UPDATE_EDUCATION,
  GET_APPLIED_JOB,
  FETCH_USER,
  CONNECT_WEB_RTC
} from "./types";

//function return function that return an actions
export const fetchUserCv = () => async dispatch => {
  let data = localStorage.getItem("token");
  let responseTokenID = await API.post("/users/generateID", { token: data });

  let userId = responseTokenID.data.id;
  console.log(userId);
  const response = await API.get(`/cvs/${userId}`);
  return dispatch({
    type: FETCH_CV,
    payload: response.data.data
  });
};

//fetch profile user
export const fetchUserProfile = userId => async dispatch => {
  //console.log(userId.id);
  const response = await API.get(`/cvs/${userId.id}`);
  return dispatch({
    type: FETCH_USER,
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
export const updateExperience = (
  idCv,
  idExperience,
  data
) => async dispatch => {
  API.patch(`/cvs/${idCv}/experience/${idExperience}`, data);
  return {
    type: UPDATE_EXPERIENCE
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
export const updateSkill = (idCv, idSkill, data) => async dispatch => {
  API.patch(`/cvs/${idCv}/skill/${idSkill}`, data);
  return {
    type: UPDATE_SKILL
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
export const updateLanguage = (idCv, idLanguage, data) => async dispatch => {
  console.log(idLanguage);
  console.log(data);
  API.patch(`/cvs/${idCv}/language/${idLanguage}`, data);
  return {
    type: UPDATE_LANGUAGE
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
export const updateEducation = (idCv, idEducation, data) => async dispatch => {
  console.log(data);
  console.log(idEducation);
  console.log(idCv);
  API.patch(`/cvs/${idCv}/education/${idEducation}`, data);
  return {
    type: UPDATE_EDUCATION
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

// get jobs by userCv

export const getAppliedJobs = id => async dispatch => {
  let response = await API.get(`/users/gotJobdetailAndCompanydetail/${id}`);
  let data = await response.data.User.appliedJobs;

  /*   let payload = response.data.User.appliedJobs; */
  return dispatch({
    type: GET_APPLIED_JOB,
    payload: data
  });
};

// web RTC
export const connectWebRTC = (userId, companyId) => async dispatch => {
  API.post(`/company/startConversation/${userId}/${companyId}`);

  return dispatch({
    type: CONNECT_WEB_RTC,
    payload: ""
  });
};
