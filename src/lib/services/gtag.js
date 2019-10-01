export const GA_TRACKING_ID = `GTM-5RJC4J`;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  
  if(typeof window !== "undefined"){
    
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url
    });
  }

};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {

  if(typeof window !== "undefined" && window.gtag){
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
  
};
