import TestAPI from "../API/testAPI";

let arr = [];
TestAPI.get("/cvs").then(response => {
  arr = response.data.data;
  console.log(arr);
});

export default arr;

const initialState = {
  cvs: []
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: (state.counter += 1)
      };
    case "ADD_VALUE":
      return {
        ...state,
        couter: (state.counter += action.value)
      };

    default:
      return state;
  }
};
//export default counterReducer;
