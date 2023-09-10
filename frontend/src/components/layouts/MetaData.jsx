import React from "react";
// import Helmet from "react-helmet"

import { Helmet, HelmetProvider } from "react-helmet-async";

const MetaData = ({ title }) => {
  return (
    <div>
      {/* <Helmet>
          <title>{`${title} - BECCA Luxury Empire`}</title>
          </Helmet> */}

      <HelmetProvider>
        <Helmet>
          <title>{`${title} - BECCA Luxury Empire`}</title>
        </Helmet>
      </HelmetProvider>

    
    </div>
  );
};

export default MetaData;
