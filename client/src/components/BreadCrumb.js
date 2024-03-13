import React from "react";
import { Link } from "react-router-dom";
const BreadCrumbjs = ({ title }) => {
  return (
    <div className="breadcrumb py-4 mb-0">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center pb-0">
              <Link to={"/"} className="text-dark">
                Home
              </Link>{" "}
              / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbjs;
