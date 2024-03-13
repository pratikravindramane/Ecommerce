import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ data }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data}</title>
      </Helmet>
      <div></div>
    </>
  );
};

export default Meta;
