import "./Testimonials.css";
import testimonial_img from "../../assets/testimonials/testimonial.png";
import testimonial_img_small from "../../assets/testimonials/testimonial-small.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Pagination } from "swiper/core";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// SwiperCore.use([Pagination]);

import "swiper/css";

const Testimonials = () => {
  const pagination = {
    // el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet">' + "</span>";
    },
    bulletActiveClass: "active"
  };
  return (
    <section id="testimonials">
      <h1>
        praises for <span className="highlight">rework</span>
      </h1>
      <div className="testimonials-container">
        <div className="testimonials-cards">
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
            spaceBetween={10}
            slidesPerView="auto"
            centeredSlides={true}
            centeredSlidesBounds={true}
          >
            <SwiperSlide>
              <div className="testimonial-card">
                <div className="testimonial-head">
                  <p>
                    “ Rework has been a great way to make the hiring process
                    easier and faster. We've been able to save money and time,
                    and the recruiters have been able to find the best employers
                    leads. Highly recommend! “
                  </p>
                </div>
                <div className="testimonial-bottom">
                  <img src={testimonial_img} alt="" />
                  <img src={testimonial_img_small} alt="" />
                  <div className="testimonial-user">
                    <h3>Rohit Shrivastav</h3>
                    <p>HR, Google</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card">
                <div className="testimonial-head">
                  <p>
                    Rework has been a great way to make the hiring process
                    easier and faster. We've been able to save money and time,
                    and the recruiters have been able to find the best employers
                    leads. Highly recommend!
                  </p>
                </div>
                <div className="testimonial-bottom">
                  <img
                    src={testimonial_img}
                    alt=""
                    style={{ display: "none" }}
                  />
                  <img
                    src={testimonial_img_small}
                    alt=""
                    style={{ display: "none" }}
                  />
                  <div
                    className="testimonial-user"
                    style={{ textAlign: "right", justifyContent: "flex-end" }}
                  >
                    <h3>Rohit Shrivastav</h3>
                    <p>UI Designer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card">
                <div className="testimonial-head">
                  <p>
                    Rework has been a great way to make the hiring process
                    easier and faster. We've been able to save money and time,
                    and the recruiters have been able to find the best employers
                    leads. Highly recommend!
                  </p>
                </div>
                <div className="testimonial-bottom">
                  <img
                    src={testimonial_img}
                    alt=""
                    style={{ display: "none" }}
                  />
                  <div
                    className="testimonial-user"
                    style={{ textAlign: "right", justifyContent: "flex-end" }}
                  >
                    <h3>Rohit Shrivastav</h3>
                    <p>UI Designer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
