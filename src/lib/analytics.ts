import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-22ZZGZ46KB");
};

export const trackPageView = (path: string) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};