import { SET_CASE_STUDIES, SET_ITEM_CASE_STUDY, SET_ITEM_FILTER } from "../types/case-studies";

export const setCaseStudies = (payload) => ({
  type: SET_CASE_STUDIES,
  payload,
});

export const setItemCaseStudy = (payload) => ({
  type: SET_ITEM_CASE_STUDY,
  payload,
});

export const setItemFilter = (payload) => ({
  type: SET_ITEM_FILTER,
  payload,
});
