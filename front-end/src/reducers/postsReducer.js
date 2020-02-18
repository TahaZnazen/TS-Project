import {
  GET_POSTS,
  SEARCH,
  COMPANY_OFFERS,
  COMPANY_INFO,
  COMPANY_DASHBOARD,
  GET_COMPANY_OFFERS,
  ADVANCED_FILTER
} from "../actions/types";

const initialState = {
  posts: [],
  companyPosts: [],
  companyInfo: [],
  companyDashBoard: [],
  companyPostsAndCondidates: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: [action.payload]
      };
    case SEARCH:
      return {
        ...state,
        posts: [action.payload]
      };
    case COMPANY_OFFERS:
      return {
        ...state,
        companyPosts: [action.payload]
      };
    case COMPANY_INFO:
      return {
        ...state,
        companyInfo: [action.payload]
      };
    case COMPANY_DASHBOARD:
      return {
        ...state,
        companyDashBoard: [action.payload]
      };
    case GET_COMPANY_OFFERS:
      return {
        ...state,
        companyPostsAndCondidates: [action.payload]
      };
    case ADVANCED_FILTER:
      return {
        ...state,
        posts: [action.payload]
      };

    default:
      return state;
  }
};
