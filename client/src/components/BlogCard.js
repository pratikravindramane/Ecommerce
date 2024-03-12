import React from "react";
import { Link } from "react-router-dom";
const BlogCard = ({ img, date, title, desc }) => {
  return (
    <div className="col-3">
      <div className="blog-card ">
        <div className="card-img"></div>
        <img src={img} alt="img" className="img-fluid" />
        <div className="blog-content">
          <p className="date">{date}</p>
          <h5 className="title">{title}</h5>
          <p className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
            eveniet exercitationem doloribus adipisci sun.
          </p>
          <Link to={"/"} className="button">
            Read
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
