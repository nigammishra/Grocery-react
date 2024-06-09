import React from "react";
import clutch from "../../images/clutch-dark.png";
import member1 from "../../images/01.jpg";
// import member2 from '../../images/02.jpg'
import member3 from "../../images/03.jpg";
// import member4 from '../../images/04.jpg'
import idea from "../../images/idea.gif";
import team from "../../images/team.gif";
import award from "../../images/award.gif";

import bgimage from "../../images/contact-bg.png";
import cover from "../../images/cover.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import SocialNetworksCarousel from "./SocialNetworksCarousel";
import CaseStudySlider from "./CaseStudySlider";
// import 'swiper/css'; // Import Swiper styles
// import 'swiper/css/pagination'; // Import Swiper pagination styles
// import { Pagination } from 'swiper'; // Import Pagination module

const AboutUs = () => {
  return (
    <div>
      <>
        {/* Hero */}
        <section className="position-relative pt-5">
          {/* Background */}
          <div
            className="position-absolute top-0 start-0 w-100 bg-position-bottom-center bg-size-cover bg-repeat-0"
            style={{ backgroundImage: "url(assets/img/about/hero-bg.svg)" }}
          >
            <div className="d-lg-none" style={{ height: 960 }} />
            <div className="d-none d-lg-block" style={{ height: 768 }} />
          </div>
          {/* Content */}
          <div className="container position-relative zindex-5 pt-5">
            <div className="row">
              <div className="col-lg-6">
                {/* Breadcrumb */}
                <nav
                  className="pt-md-2 pt-lg-3 pb-4 pb-md-5 mb-xl-4"
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="index.html">
                        <i className="bx bx-home-alt fs-lg me-1" />
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About v.1
                    </li>
                  </ol>
                </nav>
                {/* Text */}
                <h1 className="pb-2 pb-md-3">About Silicon</h1>
                <p
                  className="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3"
                  style={{ maxWidth: 526 }}
                >
                  We are a dedicated team of passionate product managers, full
                  stack developers, UX/UI designers, QA engineers and marketing
                  experts helping businesses of every size — from new startups
                  to public companies — launch their projects using our
                  software.
                </p>
                <img
                  src={clutch}
                  className=" d-dark-mode-none"
                  width={175}
                  alt="Clutch"
                />
                <img
                  src="assets/img/about/clutch-light.png"
                  className="d-none d-dark-mode-block"
                  width={175}
                  alt="Clutch"
                />
                <div className="row row-cols-3 pt-4 pt-md-5 mt-2 mt-xl-4">
                  <div className="col">
                    <h3 className="h2 mb-2">2,480</h3>
                    <p className="mb-0">
                      <strong>Remote</strong> Sales Experts
                    </p>
                  </div>
                  <div className="col">
                    <h3 className="h2 mb-2">760</h3>
                    <p className="mb-0">
                      <strong>New Clients</strong> per Month
                    </p>
                  </div>
                  <div className="col">
                    <h3 className="h2 mb-2">1,200</h3>
                    <p className="mb-0">
                      <strong>Requests</strong> per Week
                    </p>
                  </div>
                </div>
              </div>
              {/* Images */}
              <div className="col-lg-6 mt-xl-3 pt-5 pt-lg-4">
                <div className="row row-cols-2 gx-3 gx-lg-4">
                  <div className="col pt-lg-5 mt-lg-1">
                    <img
                      src={member1}
                      className="d-block rounded-3 mb-3 mb-lg-4"
                      alt="member"
                    />
                    {/* <img
                      src={member2}
                      className="d-block rounded-3"
                     alt="member"
                    /> */}
                  </div>
                  <div className="col">
                    <img
                      src={member3}
                      className="d-block rounded-3 mb-3 mb-lg-4"
                      alt="member"
                    />
                    {/* <img
                      src={member4}
                      className="d-block rounded-3"
                     alt="member"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      <>
        <section className="container mt-8 mb-5 pt-lg-5" id="benefits">
          <Swiper
            className="swiper pt-3"
            modules={[]} // Use the modules prop to include the Pagination module
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              500: { slidesPerView: 2 },
              991: { slidesPerView: 3 },
            }}
          >
            <div className="swiper-wrapper pt-4">
              <SwiperSlide className="swiper-slide border-end-lg px-2">
                <div className="text-center">
                  <img
                    src={idea}
                    width="100"
                    alt="Bulb icon"
                    className="d-block mb-4 mx-auto"
                  />
                  <h4 className="mb-2 pb-1">Creative Solutions</h4>
                  <p className="mx-auto" style={{ maxWidth: "336px" }}>
                    Sed morbi nulla pulvinar lectus tempor vel euismod accumsan.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide border-end-lg px-2">
                <div className="text-center">
                  <img
                    src={award}
                    width="100"
                    alt="Award icon"
                    className="d-block mb-4 mx-auto"
                  />
                  <h4 className="mb-2 pb-1">Award Winning</h4>
                  <p className="mx-auto" style={{ maxWidth: "336px" }}>
                    Sit facilisis dolor arcu, fermentum vestibulum arcu
                    elementum imperdiet.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide px-2">
                <div className="text-center">
                  <img
                    src={team}
                    width="100"
                    alt="Team icon"
                    className="d-block mb-4 mx-auto"
                  />
                  <h4 className="mb-2 pb-1">Team of Professionals</h4>
                  <p className="mx-auto" style={{ maxWidth: "336px" }}>
                    Nam venenatis urna aenean quis feugiat et senectus turpis.
                  </p>
                </div>
              </SwiperSlide>
            </div>
            <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
          </Swiper>
        </section>
      </>

      <>
        {/* Video showreel */}
        <section className="container text-center pb-5 mt-n2 mt-md-0 mb-md-2 mb-lg-4">
          <div className="position-relative rounded-3 overflow-hidden">
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center zindex-5">
              <a
                href="https://www.youtube.com/watch?v=zPo5ZaH6sW8"
                className="btn btn-video btn-icon btn-xl stretched-link bg-white"
                data-bs-toggle="video"
              >
                <i className="bx bx-play" />
              </a>
            </div>
            <span className="position-absolute top-0 start-0 w-100 h-100  opacity-35" />
            <img
              src={cover}
              className="d-block w-100"
              alt="Cover "
            />
          </div>
        </section>
      </>
      <>
        {/* Awards */}
        <section className="container mt-8 mb-5 pb-3 pb-md-4 pb-lg-5">
          <div className="row gy-4 py-xl-2">
            <div className="col-md-4">
              <h2 className="mb-0 text-md-start text-center">
                Our Partners
              </h2>
            </div>
            <div className="col-lg-7 offset-lg-1 col-md-8">
              <div className="row row-cols-sm-4 row-cols-2 gy-4">
                <div className="col">
                  <div className="position-relative text-center">
                    <img
                      src="assets/img/landing/digital-agency/awards/webby.svg"
                      width={100}
                      alt="Webby"
                      className="d-block mx-auto mb-3"
                    />
                    <Link
                      to="#"
                      className="text-body justify-content-center fs-sm stretched-link text-decoration-none"
                    >
                      4x mobile of the day
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div className="position-relative text-center">
                    <img
                      src="assets/img/landing/digital-agency/awards/cssda.svg"
                      width={100}
                      alt="CSSDA"
                      className="d-block mx-auto mb-3"
                    />
                    <Link
                      to="#"
                      className="text-body justify-content-center fs-sm stretched-link text-decoration-none"
                    >
                      1x Kudos
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div className="position-relative text-center">
                    <img
                      src="assets/img/landing/digital-agency/awards/awwwards.svg"
                      width={100}
                      alt="Awwwards"
                      className="d-block mx-auto mb-3"
                    />
                    <Link
                      to="#"
                      className="text-body justify-content-center fs-sm stretched-link text-decoration-none"
                    >
                      3x website of the day
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div className="position-relative text-center">
                    <img
                      src="assets/img/landing/digital-agency/awards/fwa.svg"
                      width={100}
                      alt="FWA"
                      className="d-block mx-auto mb-3"
                    />
                    <Link
                      to="#"
                      className="text-body justify-content-center fs-sm stretched-link text-decoration-none"
                    >
                      2x best website
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>


      <>
      <CaseStudySlider/>
      </>
      <>
        {/* Contact CTA */}
        <section className="container mt-8">
          <div className="card border-0 bg-gradient-primary">
            <div
              className="card-body p-md-5 p-4 bg-size-cover"
              style={{
                backgroundImage: `url(${bgimage})`,
                backgroundSize: "cover", // Ensures the background image covers the entire section
                backgroundPosition: "center", // Centers the background image
                backgroundRepeat: "no-repeat", // Prevents the image from repeating
              }}
            >
              <div className="py-md-5 py-4 text-center">
                <h3 className="h4 fw-normal text-light opacity-75">
                  Want to work with us? Let’s talk
                </h3>
                <a
                  href="mailto:email@example.com"
                  className="display-6 text-light"
                >
                  email@example.com
                </a>
                <div className="pt-md-5 pt-4 pb-md-2">
                  <a href="contacts-v1.html" className="btn btn-lg btn-light">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
     
      <>
      <SocialNetworksCarousel/>
      </>
    </div>
  );
};

export default AboutUs;
