import React from "react";
import BreadCrumb from "../components/BreadCrumb.js";
import { Helmet } from "react-helmet";
import Meta from "../components/Meta.js";
const OurStore = () => {
  return (
    <div>
      <Meta data={"Our Store"} />

      <BreadCrumb title={"Our Store"} />
    </div>
  );
};

export default OurStore;
