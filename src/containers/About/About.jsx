import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  BsFillPlayCircleFill,
  BsFillCalendar2CheckFill,
  BsArrowReturnRight,
  BsFillCameraFill,
} from "react-icons/bs";
import {
  GiSchoolBag,
  GiPencilBrush,
  GiKeyboard,
  GiCookingGlove,
} from "react-icons/gi";
import { MdSchool } from "react-icons/md";
import images from "../../constants/images";
import "./About.css";

const About = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div
      id="About"
      className="app__about bg__clean"
      style={{ minHeight: `${height}px` }}
    >
      <div className="app__about-title titles-sections">
        <h2>About</h2>
      </div>
      <div className="app__about-sections">
        <div
          className="app__about-section_me section"
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <img src={images.Num1} className="img-number" alt="Number 1" />
          <div className="app__about-section_me-title">
            <h2>Me</h2>
          </div>
          <div className="app__about-section_me-text">
            <div>
              <span>
                <FaMapMarkerAlt className="icon-mapmarket" />
              </span>
              <p>I live in Tecamac, Estado de Mexico, Mexico.</p>
            </div>
            <div className="line-row" />
            <div>
              <span><BsFillPlayCircleFill className="icon-playcircle" /></span>
              <p>
                I started Designing in 2020 and Developing Software in 2022.
              </p>
            </div>
            <div className="line-row" />
            <div>
              <span><BsFillCalendar2CheckFill className="icon-calendarcheck" /></span>
              <p>
                I currently work through my university developing software for
                other companies that have an agreement with the institution.
              </p>
            </div>
          </div>
        </div>
        <div
          className="app__about-section_studies section"
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <img src={images.Num2} className="img-number" alt="Number Two" />
          <div className="app__about-section_studies-title">
            <h2>My Studies</h2>
          </div>
          <div className="app__about-section_studies-text">
            <div className="app__about-section_studies-grade">
              <GiSchoolBag className="icon-bag Icon-Studie" />
              <h2>
                <BsArrowReturnRight style={{ color: "var(--accent-100)" }} />{" "}
                High School
              </h2>
              <p>
                I studied as a computer aided design technician during 2018 to
                2021, successfully finishing and obtaining a degree.
              </p>
            </div>
            <div className="line-row" />
            <div className="app__about-section_studies-grade">
              <MdSchool className="icon-school Icon-Studie" />
              <h2>
                <BsArrowReturnRight style={{ color: "var(--accent-100)" }} />{" "}
                University
              </h2>
              <p>
                Start studying Software Engineering in 2021 at the Tecamac
                Polytechnic University, I am currently working and studying
                there.
              </p>
            </div>
          </div>
        </div>
        <div
          className="app__about-section_hobbies section"
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <img src={images.Num3} className="img-number" alt="" />
          <div className="app__about-section_hobbies-title">
            <h2>My Hobbies</h2>
          </div>
          <div className="app__about-section_hobbies-text">
            <div>
              <span>
                <GiPencilBrush
                  style={{ fontSize: "1.7em", color: "#8AE9C1" }}
                />
              </span>
              <p>I love to draw and design new ideas.</p>
            </div>
            <div className="line-row" />
            <div>
              <span>
                <GiKeyboard style={{ fontSize: "1.7em", color: "#D2FF96" }} />
              </span>
              <p>
                I usually program pages that may be of use to me or ideas for
                pages that I can add to my portfolio.
              </p>
            </div>
            <div className="line-row" />
            <div>
              <span>
                <GiCookingGlove
                  style={{ fontSize: "1.7em", color: "#F8E16C" }}
                />
              </span>
              <p>
                I love to cook, I can spend hours making new recipes or recipes
                that I know.
              </p>
            </div>
            <div className="line-row" />
            <div>
              <span>
                <BsFillCameraFill
                  style={{ fontSize: "1.7em", color: "#E6ADEC" }}
                />
              </span>
              <p>
                I enjoy taking pictures, I like to take photos of things I find
                in my day to day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
