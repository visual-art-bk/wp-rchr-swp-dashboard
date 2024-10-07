import React, { ReactNode } from "react";
import { createRoot } from "react-dom/client";

const ROOT_ID_TO_WORDPRESS_BODY_CONTENT = "wpbody-content";
const rootID = "wpRchrSwpDashboardRoot";
const rootElement = document.getElementById(rootID);

function App({ isValidRootElement }: { isValidRootElement: boolean }) {
  if (isValidRootElement === false) {
    return <div>대시보드 준비중이에요.</div>;
  }
  return <div className="app"></div>;
}

if (rootElement !== null && rootElement !== undefined) {
  createRoot(rootElement).render(<App isValidRootElement={true}></App>);
} else {
  console.error(
    `Invalid id [ ${rootID} ] to the page of the dashboard of Wp-Swiper.`
  );
  const rootWpBodyContent = document.getElementById(
    ROOT_ID_TO_WORDPRESS_BODY_CONTENT
  );

  // @ts-ignore
  // That' why rootWpBodyContent is got by the id of Wordpress. 
  createRoot(rootWpBodyContent).render(<div>대시보드 준비중이에요.</div>);
}
