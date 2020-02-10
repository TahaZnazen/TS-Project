import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  userID: null,
  errMsg: null
};

// jwt.verify(token, 'shhhhh', function(err, decoded) {
//   if (err) {
//     /*
//       err = {
//         name: 'TokenExpiredError',
//         message: 'jwt expired',
//         expiredAt: 1408621000
//       }
//     */
//   }
// });

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        userID: action.payload.user._id
      };
    default:
      return state;
  }
}
