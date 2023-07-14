import { SET_CASE_STUDIES, SET_ITEM_CASE_STUDY } from "../types/case-studies";

const initialState = {
  caseStudies: [],
  itemCaseStudy: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CASE_STUDIES:
      return {
        ...state,
        caseStudies: action.payload,
      };
      case SET_ITEM_CASE_STUDY:
      return {
        ...state,
        itemCaseStudy: action.payload,
      };
    default:
      return state;
  }
};

const caseStudiesReducer = { reducer, initialState };

export default caseStudiesReducer;
