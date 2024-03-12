import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import { images } from "../../constants";
import { BsGithub, BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import { GrPinterest } from "react-icons/gr";
import "./Home.css";

const Home = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
      className="app__home bg__Figures"
      style={{ height: `${height}px` }}
      id="Home"
    >
      <div className="app__home-links">
        <a
          className="icons-counts"
          href="https://github.com/RodrigoRD03"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          className="icons-counts"
          href="https://www.instagram.com/rodrigo_rodriguez2003/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          className="icons-counts"
          href="https://www.facebook.com/profile.php?id=100009577370799"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          className="icons-counts"
          href="https://www.linkedin.com/in/rodrigo-rodriguez-diaz-2987a0185/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          className="icons-counts"
          href="https://pin.it/2jM4JoR"
          target="_blank"
          rel="noreferrer"
        >
          <GrPinterest />
        </a>
      </div>
      <div className="app__home-text">
        <h1 className="text-hi">Hi, There!</h1>
        <h1 className="text-im">I'm Rodrigo Rodriguez</h1>
        <div className="animation-container">
          <TypeAnimation
            className="animation"
            sequence={["Frontend Developer.", 2000, "Graphic Designer.", 2000]}
            speed={50}
            wrapper="h1"
            repeat={Infinity}
          />
        </div>
      </div>
      <div data-aos="fade-down-left" className="app__home-img">
        <img src={images.BgImage} alt="" />
      </div>
    </div>
  );
};

export default Home;
