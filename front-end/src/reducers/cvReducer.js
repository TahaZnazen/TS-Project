const userCvReducer = (cv = [], action) => {
  switch (action.type) {
    case "FETCH_CV":
      return [...action.payload];
    case "ADD_EXPERIENCE":
      return cv;
    case "FETCH_USER":
      return [...action.payload];
    default:
      return cv;
  }
};

export default userCvReducer;
