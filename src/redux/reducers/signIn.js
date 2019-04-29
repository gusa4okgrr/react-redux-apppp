import { actionConstants } from "../actions/signIn";

const defaultState = {
  error: null,
  user: null,
};

const signInReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionConstants.SIGN_IN.FAIL: {
      console.log(action);

      return {
        ...state,
        error: action.error.message,
      };
    }

    case actionConstants.SIGN_IN.SUCCESS: {
      console.log('action', action);

      return {
        ...state,
        userData: action.payload.data,
      };
    }

    default:
      return state;
  }
};

export default signInReducer;