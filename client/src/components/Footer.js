import React from "react";
import newsLetter from "../images/newsletter.png";
import { Link } from "react-router-dom";
import { FaLinkedin, FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
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
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-5">
                  Ghatkopar west, mumbai 400086, maharashtra, india
                </address>
                <a
                  href="tel:+91 8291735882"
                  className="mt-3 d-block mb-2 text-white"
                >
                  +91 8291735882
                </a>
                <a
                  href="mailto:pratik.mane7727@gmail.com"
                  className="mt-2 d-block mb-2 text-white"
                >
                  pratik.mane7727@gmail.com
                </a>
                <div className="social-icons d-flex gap-30 align-items-center">
                  <a
                    href={"https://github.com/pratikravindramane/"}
                    target="_blank"
                    alt="social-icons"
                    rel="noreferrer"
                    className="text-white fs-4"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={"https://linkedin.com/in/pratik-mane-22975019b/"}
                    rel="noreferrer"
                    target="_blank"
                    alt="social-icons"
                    className="text-white fs-4"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={"https://twitter.com/pratikmane5598"}
                    target="_blank"
                    alt="social-icons"
                    rel="noreferrer"
                    className="text-white fs-4"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href={"https://www.instagram.com/mane.prem"}
                    rel="noreferrer"
                    target="_blank"
                    alt="social-icons"
                    className="text-white fs-4"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
              <div></div>
            </div>
            <div className="col-3 d-grid">
              <h4 className="text-white mb-4">Information</h4>
              <Link className="text-white py-2 mb-1">Privacy Policy</Link>
              <Link className="text-white py-2 mb-1">Refund Policy</Link>
              <Link className="text-white py-2 mb-1">Shipping Policy</Link>
              <Link className="text-white py-2 mb-1">Terms of Services</Link>
              <Link className="text-white py-2 mb-1">Blogs</Link>
              <div></div>
            </div>
            <div className="col-3 d-grid">
              <h4 className="text-white mb-4">Account</h4>
              <Link className="text-white py-2 mb-1">Search</Link>
              <Link className="text-white py-2 mb-1">About us</Link>
              <Link className="text-white py-2 mb-1">FAQ</Link>
              <Link className="text-white py-2 mb-1">Contact</Link>
              <div></div>
            </div>
            <div className="col-2 d-grid">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-grid flex-colomn">
                <Link className="text-white py-2 mb-1">Accessories</Link>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tables</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
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
