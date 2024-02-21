import React from "react";
import newsLetter from "../images/newsletter.png";
function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-item-center">
                <img src={newsLetter} alt="" />
                <h3 className="mb-0 text-white">Sign Up for Newsletter</h3>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 ">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()} powered by Pratik Mane{" "}
              </p>
            </div>
            {/* <div className="col-6">pollo</div> */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
