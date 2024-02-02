import data from "./dataCaseStudies.json";
export const getCaseStudiesDetail = (name) => {
  try {
    const dataFilter = data["case-studies"].find((item) => item.name === name);
    return { success: true, data: dataFilter };
  } catch (error) {
    return { success: false, error };
  }
};
