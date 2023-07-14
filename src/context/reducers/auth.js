import { SET_ACCOUNT, LOGIN, LOGOUT } from "../types/auth";

const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  account: {
    accessToken: "",
    refreshToken: "",
    user: {},
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: true,
      };

    case LOGIN.SUCCESS: {
      const result = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false,
        account: {
          accessToken: result?.token?.accessToken,
          user: { ...result?.user },
        },
      };
    }
    case LOGIN.FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        errorMsg: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        account: null,
      };
    case SET_ACCOUNT:
      return { ...state, account: action.payload };
    default:
      return state;
  }
};

const authReducer = { reducer, initialState };

export default authReducer;
