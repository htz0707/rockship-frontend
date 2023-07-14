import { SET_ACCOUNT, LOGIN, LOGOUT } from "../types/auth";

export const setAccount = (payload) => ({
  type: SET_ACCOUNT,
  payload,
});

export const loginRequest = (payload) => {
  return {
    type: LOGIN.REQUEST,
    payload,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: LOGIN.SUCCESS,
    payload,
  };
};

export const loginFail = (payload) => {
  return {
    type: LOGIN.FAIL,
    payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
