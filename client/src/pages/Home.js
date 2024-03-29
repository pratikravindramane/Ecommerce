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
import brand1 from "../images/brand-01.png";
import brand2 from "../images/brand-02.png";
import brand3 from "../images/brand-03.png";
import brand4 from "../images/brand-04.png";
import brand5 from "../images/brand-05.png";
import brand6 from "../images/brand-06.png";
import brand7 from "../images/brand-07.png";
import brand8 from "../images/brand-08.png";
import blog1 from "../images/blog-1.jpg";
import camera from "../images/camera.jpg";
import tv from "../images/tv.jpg";
import watches from "../images/watch.jpg";
import gaming from "../images/headphone.jpg";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import AppleWatch from "../images/subbanner-01.webp";
import laptop from "../images/subbanner-02.webp";
import phone from "../images/subbanner-03.webp";
import speaker from "../images/subbanner-04.webp";
import Meta from "../components/Meta";
function Home() {
  return (
    <>
      <Meta data={"Home"} />
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
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex align-items-center gap-30">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={gaming} alt="" />
                </div>
                <div className="d-flex align-items-center gap-30">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={tv} alt="" />
                </div>

                <div className="d-flex align-items-center gap-30">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                <div className="d-flex align-items-center gap-30">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={watches} alt="" />
                </div>
                <div className="d-flex align-items-center gap-30">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={gaming} alt="" />
                </div>
                <div className="d-flex align-items-center gap-30">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={tv} alt="" />
                </div>

                <div className="d-flex align-items-center gap-30">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                <div className="d-flex align-items-center gap-30">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={watches} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper ">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src={brand1} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand2} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand3} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand4} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand5} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand6} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand7} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand8} alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard
              img={blog1}
              title={"Pratik Mane"}
              date={"1 April 2024"}
              desc={"lorem ipsum"}
            />
            <ProductCard img={blog1} />
            <ProductCard img={blog1} />
            <ProductCard img={blog1} />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src={AppleWatch}
                  alt="watch"
                  className="famous-img img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series</h6>
                  <p>From $399 or $16.62/mo. for 24mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src={laptop}
                  alt="watch"
                  className="famous-img img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">STUDIO DISPLAY</h5>
                  <h6 className="text-dark">600 nits of brightness.</h6>
                  <p className="text-dark">27-inch 5k Retina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={phone} alt="watch" className="famous-img img-fluid" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">SMARTPHONES</h5>
                  <h6 className="text-dark">Smartphoe 13Pro.</h6>
                  <p className="text-dark">
                    Now in Green. From $999.00 or $41.62/mo. for 24mo.
                    Footnote.*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src={speaker}
                  alt="watch"
                  className="famous-img img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">HOME SPEAKERS</h5>
                  <h6 className="text-dark">Room-filling Sound</h6>
                  <p className="text-dark">
                    From $699 or $116.62/mo. for 12mo.*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>

            <div className="row">
              {/* <div className="col-2">
                <div className="card"></div>
              </div>
              <div className="col-2"></div> */}
              <ProductCard
                img={blog1}
                title={"Pratik Mane"}
                date={"1 April 2024"}
                desc={"lorem ipsum"}
              />
              <ProductCard img={blog1} />
              <ProductCard img={blog1} />
              <ProductCard img={blog1} />
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard img={blog1} title={"Pratik Mane"} date={"1 April 2024"} />
            <BlogCard img={blog1} title={"Pratik Mane"} date={"1 April 2024"} />
            <BlogCard img={blog1} title={"Pratik Mane"} date={"1 April 2024"} />
            <BlogCard img={blog1} title={"Pratik Mane"} date={"1 April 2024"} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
