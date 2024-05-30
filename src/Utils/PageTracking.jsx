import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

function usePageTracking() {

  let location = useLocation();
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize("UA-192347971-1");
      window.GA_INITIALIZED = true
    }
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname);
  }, [location]);

}

export default usePageTracking;