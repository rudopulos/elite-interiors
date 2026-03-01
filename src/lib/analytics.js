export const GA_MEASUREMENT_ID = "G-Z6WV2BEYN4";

export const loadGoogleAnalytics = () => {
  if (typeof window === 'undefined' || window.gtag) return;

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID);
    console.log("Google Analytics loaded and configured.");
  };
};