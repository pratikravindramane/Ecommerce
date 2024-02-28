import React from "react";
import { Link } from "react-router-dom";
import mainBanner from "../images/main-banner-1.jpg";
import catBanner from "../images/catbanner-01.jpg";
import catBanner2 from "../images/catbanner-02.jpg";
import catBanner3 from "../images/catbanner-03.jpg";
import catBanner4 from "../images/catbanner-04.jpg";
import service from "../images/service.png";
import service2 from "../images/service-02.png";
import service3 from "../images/service-03.png";
import service4 from "../images/service-04.png";
import service5 from "../images/service-05.png";
function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner py-3">
                <img src={mainBanner} alt="" className="img-fluid rounded-3" />
                <div className="main-banner-content">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.00/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6 py-3">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                <div className="small-banner">
                  <img src={catBanner} alt="" className="img-fluid rounded-3" />
                  <div className="small-banner-content">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or $41.00</p>
                  </div>
                </div>
                <div className="small-banner ">
                  <img
                    src={catBanner2}
                    alt=""
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>
                      From $599.00 or <br />
                      $49.91/mo. for 12mo. *
                    </p>
                  </div>
                </div>
                <div className="small-banner ">
                  <img
                    src={catBanner3}
                    alt=""
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content">
                    <h4>15% off</h4>
                    <h5>Smartwatch 7</h5>
                    <p>
                      Shop the latest band <br />
                      style and colors.
                    </p>
                  </div>
                </div>
                <div className="small-banner ">
                  <img
                    src={catBanner4}
                    alt=""
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content">
                    <h4>free engraving</h4>
                    <h5>Airpods Max</h5>
                    <p>
                      High-fidelity playbadk & <br />
                      ultra low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex gap-15 align-items-center">
                  <img src={service} alt="services" />
                  <div>
                    <h6>Free shipping</h6>
                    <p className="mb-0">From all order over $599</p>
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src={service2} alt="services" />
                  <div>
                    <h6>Daily Suprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src={service3} alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src={service4} alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Direct Price</p>
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src={service5} alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
