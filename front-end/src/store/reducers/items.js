const initialState = {
  name: "taha",
  result: []
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_RESULT":
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: action.counter })
      };

    case "DELETE_RESULT":
      const updatedArr = state.result.filter(elm => elm.id !== action.resultId);
      return {
        ...state,
        result: updatedArr
      };

    default:
      return state;
  }
};
export default storeReducer;
