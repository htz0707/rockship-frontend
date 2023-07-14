import { createRequestTypes } from "./common";

export const SET_ACCOUNT = "SET_ACCOUNT";
export const LOGOUT = "LOGOUT";
export const LOGIN = createRequestTypes("LOGIN");
export const SIGNUP = createRequestTypes("SIGNUP");
