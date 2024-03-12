import React, { useState, useEffect } from "react";
import Design from "../Design/Design";
import Programming from "../Programming/Programming";
import { FaHandPointer } from "react-icons/fa";
import "./Proyects.css";

const Proyects = () => {
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

  return (
    <div
      className="app__proyects bg__clean"
      id="Proyects"
      style={{ minHeight: `${height}px` }}
    >
      <div className="titles-sections">
        <h2>Proyects</h2>
      </div>
      <div className="app__proyects-options">
        <div
          className="app__proyects-option_programming"
          onClick={() => {
            const sectionProgramming = document.querySelector(
              ".app__proyects-option_programming-open"
            );
            sectionProgramming.classList.add("open");
          }}
        >
          <h1>Programming</h1>
          <span>
            <FaHandPointer className="icon-pointer icon-one" />
          </span>
        </div>
        <div
          className="app__proyects-option_designing"
          onClick={() => {
            const sectionProgramming = document.querySelector(
              ".app__proyects-option_designing-open"
            );
            sectionProgramming.classList.add("open");
          }}
        >
          <h1>Design</h1>
          <span>
            <FaHandPointer className="icon-pointer icon-two" />
          </span>
        </div>
        <div className="app__proyects-option_programming-open">
          <Programming />
        </div>
        <div className="app__proyects-option_designing-open">
          <Design />
        </div>
      </div>
    </div>
  );
};

export default Proyects;
