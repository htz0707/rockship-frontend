import data from "./dataCaseStudies.json";

export const getCaseStudies = (params) => {
  try {
    const { industry, companySize, market } = params;
    if (!industry && !companySize && !market) {
      return { success: true, data: data["case-studies"] };
    }
    const filteredCaseStudies = data["case-studies"].filter((caseStudy) => {
      return (
        (industry === 'All' ||
        caseStudy.industry === industry) &&
        (companySize === 'All' ||
        caseStudy.companySize === companySize) && 
        (market === 'All'  ||
        caseStudy.market === market)
      );
    });
    return { success: true, data: filteredCaseStudies };
  } catch (error) {
    return { success: false, error };
  }
};

export const getLsMarket = () => {
  try {
    return { success: true, data: data["lsMarket"] };
  } catch (error) {
    return { success: false, error };
  }
};

export const getLsCompanySize = () => {
  try {
    return { success: true, data: data["lsCompanySize"] };
  } catch (error) {
    return { success: false, error };
  }
};

export const getLsIndustry = () => {
  try {
    return { success: true, data: data["lsIndustry"] };
  } catch (error) {
    return { success: false, error };
  }
};
