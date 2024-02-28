import React from "react";
import { Link } from "react-router-dom";
import mainBanner from "../images/main-banner-1.jpg";
import catBanner from "../images/catbanner-01.jpg";
import catBanner2 from "../images/catbanner-02.jpg";
import catBanner3 from "../images/catbanner-03.jpg";
import catBanner4 from "../images/catbanner-04.jpg";
function Home() {
  return (
    <>
      <div className="home-wrapper-1 py-5">
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
      </div>
    </>
  );
}

export default Home;
