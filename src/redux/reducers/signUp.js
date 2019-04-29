import { actionConstants } from "../actions/signUp";

const defaultState = {
  error: null,
  userData: null,
};

const signInReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionConstants.SIGN_UP.FAIL: {
      console.log(action);

      return {
        ...state,
        error: action.error.message,
      };
    }

    case actionConstants.SIGN_UP.SUCCESS: {
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