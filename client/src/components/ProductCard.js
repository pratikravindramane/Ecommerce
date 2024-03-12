import React from "react";
import watch from "../images/watch.jpg";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import addCart from "../images/add-cart.svg";
import view from "../images/view.svg";
import compare from "../images/prodcompare.svg";
import gaming from "../images/blog-1.jpg";
import wishlist from "../images/wish.svg";
const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="whishlist-icon position-absolute">
          <Link>
            <img src={wishlist} alt="" />
          </Link>
        </div>
        <div className="product-image">
          <img src={watch} className="img-fluid" alt="product-img" />
          <img src={gaming} className="img-fluid" alt="product-img" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            obcaecati?
          </h5>
          <ReactStars
            count={5}
            // onChange={}
            value={"3"}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
          <p className="price">$100</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src={compare} alt="compare" />
            </Link>
            <Link>
              <img src={view} alt="view" />
            </Link>
            <Link>
              <img src={addCart} alt="add-cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
