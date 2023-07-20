import * as amplitude from "@amplitude/analytics-browser";

const useTrackingBrowser = (title) => {
  return amplitude.track(title);
};

export default useTrackingBrowser;
