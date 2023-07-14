"use client";

import React, { createContext, useReducer, useEffect } from "react";
import authReducer from "./reducers/auth";
import caseStudiesReducer from "./reducers/case-studies";

const initialState = {
  auth: {},
  caseStudies: {},
};

const initReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE_STATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// Combine the reducers into a root reducer
const rootReducer = (state, action) => ({
  ...initReducer(state, action),
  auth: authReducer.reducer(state.auth, action),
  caseStudies: caseStudiesReducer.reducer(state.caseStudies, action),
});

// Define the whitelist of state slices to localStorage
const whitelist = ["auth"];

// Create the context
const StoreContext = createContext();

// Create the provider component
const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, {
    auth: authReducer.initialState,
    caseStudiesReducer: caseStudiesReducer.initialState,
  });

  useEffect(() => {
    // Save whitelisted state slices to localStorage
    const persistedState = {};
    whitelist.forEach((slice) => {
      persistedState[slice] = state[slice];
    });
    localStorage.setItem("state", JSON.stringify(persistedState));
  }, [state]);

  useEffect(() => {
    // Load state from localStorage
    const savedState = localStorage.getItem("state");
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      dispatch({ type: "INITIALIZE_STATE", payload: parsedState });
    }
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
