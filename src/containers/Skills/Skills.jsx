import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Cards from "../Cards/Cards";
import { HiCode } from "react-icons/hi";
import { RiPencilRuler2Line } from "react-icons/ri";
import { data } from "../../constants";
import "./Skills.css";

const Skills = () => {
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
      className="app__skills bg__FiguresTwo"
      id="Skills"
      style={{ minHeight: `${height}px` }}
    >
      <div className="app__skills-title titles-sections">
        <h2>Skills</h2>
      </div>
      <div className="app__skills-container_cards">
        <div className="app__skills-section_card"  data-aos="zoom-in">
          <div className="app__skills-card_title">
            <span>
              <HiCode />
            </span>
            <h2>Programming</h2>
          </div>
          <div className="app__skills-list_card">
            {data.mediaSkillsProgramming.map((skill) => (
              <Cards key={skill.name} name={skill.name} media={skill.media} />
            ))}
          </div>
        </div>
        <div className="app__skills-section_card" data-aos="zoom-in">
          <div className="app__skills-card_title">
            <span>
              <RiPencilRuler2Line />
            </span>
            <h2>Design</h2>
          </div>
          <div className="app__skills-list_card">
            {data.mediaSkillsDesing.map((skill) => (
              <Cards key={skill.name} name={skill.name} media={skill.media} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
