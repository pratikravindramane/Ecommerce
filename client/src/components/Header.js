import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import acc from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="mb-0">free shiping over ₹500 & Free Shipping</p>
            </div>
            <div className="col-6">
              <p className="text-end mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+91 8291735882">
                  +91 8291735882
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h3 className="m-0 text-align-center">
                <Link className="text-white  text-align-center" to={"/"}>
                  Apna Shop
                </Link>
              </h3>
            </div>
            <div className="col-5">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control py2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  <BsSearch className="fs-7" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div className="d-flex">
                  <Link>
                    <img src={acc} alt="" />
                    <p>
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link>
                    <img src={wishlist} alt="" />
                    <p>
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link>
                    <img src={user} alt="" />
                    <p>
                      Log In <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link>
                    <img src={cart} alt="" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <img src={menu} alt="" height={"28px"} width={"28px"} />
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Shop Categories
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item" to="/">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/s">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to={"/"}>HOME</NavLink>
                    <NavLink to={"/store"}>our STORE</NavLink>
                    <NavLink to={"/blog"}>BLOGS</NavLink>
                    <NavLink to={"/contact"}>CONTACT</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
