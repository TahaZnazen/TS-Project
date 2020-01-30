const initialState = {
  counter: 0
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
export default counterReducer;
