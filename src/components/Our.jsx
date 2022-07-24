import React, { useState, useEffect } from "react";
import "../styles/Our.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import sarafoto from "../img/Sara2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "swiper/css/autoplay";
import CountUp, { startAnimation } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import muktar from "../img/20.jpg";


const Our = ({ className, ...rest }) => {
  SwiperCore.use([Autoplay]);
  const STARS = [
    {
      id: 1,
      name: faStar,
    },

    {
      id: 2,
      name: faStar,
    },

    {
      id: 3,
      name: faStar,
    },
    {
      id: 4,
      name: faStar,
    },
    {
      id: 5,
      name: faStar,
    },
  ];

  const iconStars = STARS.map((item) => {
    return (
      <div key={item.id}>
        <FontAwesomeIcon className="O-color" icon={faStar}>
          {item.name}
        </FontAwesomeIcon>
      </div>
    );
  });

  const [focus, setFocus] = React.useState(false);

  return (
    <div className="O-Image">
      <Swiper
        className="Sara-Sliders"
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        // onSlideChange={() => console.log("")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        autoplay
      >
        <SwiperSlide>
          <div className="slider-head">
            <i className="O-title">Testimonial</i>
            <h6 className="few-text">What Our Customer Saying?</h6>
          </div>
          <section className="O-body">
            <img src={sarafoto} alt="" />
            <div className="Sara-stars">{iconStars}</div>
            <div className="O-text">
              <p>
                The quality of organic produce is extremely high, the service is
                second to none and the taste of the food
              </p>
              <p>takes me back to my childhood when we were growing our own.</p>
              <span className="sara">Sara Taylor</span>
              <span className="cons">Consumer</span>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-head">
            <i className="O-title">Testimonial</i>
            <h6 className="few-text">What Our Customer Saying?</h6>
          </div>
          <section className="O-body">
            <img className="muktars" src={muktar} alt="" />
            <div className="Sara-stars">{iconStars}</div>
            <div className="O-text">
              <p>
                The quality of organic produce is extremely high, the service is
                second to none and the taste of the food
              </p>
              <p>takes me back to my childhood when we were growing our own.</p>
              <span className="sara">Andrew Taylor</span>
              <span className="cons">Consumer</span>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
      <hr className="O-tall" />

      <div className="O-boxs" id="section_counter">
        <div className="O-box">
          <div className="counter-item O-Child">
            <CountUp
              start={focus ? 0 : null}
              duration={3}
              suffix="%"
              end={100}
              redraw={true}
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus(true);
                    }
                  }}
                >
                  <span className="kid" ref={countUpRef}></span>
                </VisibilitySensor>
              )}
            </CountUp>

            <span className="kid1">Organic</span>
          </div>
        </div>

        <div className="O-box">
          <div className="counter-item O-Child">
          <CountUp
              start={focus ? 0 : null}
              duration={3}
              suffix=""
              end={285}
              redraw={true}
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus(true);
                    }
                  }}
                >
                  <span className="kid" ref={countUpRef}></span>
                </VisibilitySensor>
              )}
            </CountUp>
            <span className="kid1">Active Product</span>
          </div>
        </div>

        <div className="O-box O-last1">
          <div className="O-Child">
          <CountUp
              start={focus ? 0 : null}
              duration={3}
              suffix="+"
              end={385}
              redraw={true}
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus(true);
                    }
                  }}
                >
                  <span className="kid" ref={countUpRef}></span>
                </VisibilitySensor>
              )}
            </CountUp>

            <span className="kid1">Organic Orchads</span>
          </div>
        </div>
        <div className="O-box O-last">
          <div className="O-Child">
          <CountUp
              start={focus ? 0 : null}
              duration={3}
              suffix="+"
              end={25}
              redraw={true}
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus(true);
                    }
                  }}
                >
                  <span className="kid" ref={countUpRef}></span>
                </VisibilitySensor>
              )}
            </CountUp>

            <span className="kid1">Years of Farming</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our;
