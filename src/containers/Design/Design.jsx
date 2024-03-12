import React, { useState } from "react";
import { data } from "../../constants";
import { RxCross1 } from "react-icons/rx";
import {
  BsArrow90DegLeft,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { motion } from "framer-motion";
import "./Design.css";

const Design = () => {
  const [selectedId, setSelectedId] = useState(null);
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 400;
    } else {
      current.scrollLeft += 400;
    }
  };

  return (
    <>
      <div className="app__design">
        <h1>Design</h1>
        <span
          className="app___design-close_window"
          onClick={() => {
            const sectionOptions = document.querySelector(
              ".app__proyects-option_designing-open"
            );
            sectionOptions.classList.remove("open");
          }}
        >
          <RxCross1 />
        </span>
      </div>
      <div className="app__design-list" ref={scrollRef}>
        {data.listDesigns.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => {
              setSelectedId(item.id);
              const arrows = document.querySelector(
                ".app__design-image_arrows"
              );
              arrows.style.display = "none";
            }}
            style={{ cursor: "pointer" }}
          >
            <motion.img
              id={`app__design-image_${item.name}`}
              className={`app__design-image`}
              src={item.image}
            />
          </motion.div>
        ))}
        {selectedId && (
          <motion.div
            key={selectedId}
            layoutId={selectedId}
            className="app__design-image_open"
          >
            {data.listDesigns.map((item) =>
              item.id === selectedId ? (
                <motion.div
                  key={item.id}
                  className="app__design-image_open-container"
                >
                  <motion.img
                    src={item.image}
                    className={`${item.size} img-${item.name}_open`}
                  />
                  <motion.button
                    className="app__design-image_open-button"
                    onClick={() => {
                      setSelectedId(null);
                      const arrows = document.querySelector(
                        ".app__design-image_arrows"
                      );
                      arrows.style.display = "flex";
                    }}
                  >
                    <BsArrow90DegLeft />
                  </motion.button>
                </motion.div>
              ) : null
            )}
          </motion.div>
        )}
      </div>
      <div className="app__design-image_arrows">
        <span className="design__arrow-icon">
          <BsArrowLeftShort onClick={() => scroll("left")} />
        </span>
        <div className="app__design-dots_container">
          <a href="#app__design-image_BMO" className="app__design-dot_slice">
            {" "}
          </a>
          <a href="#app__design-image_Groot" className="app__design-dot_slice">
            {" "}
          </a>
          <a href="#app__design-image_Zipo" className="app__design-dot_slice">
            {" "}
          </a>
        </div>
        <span className="design__arrow-icon">
          <BsArrowRightShort onClick={() => scroll("right")} />
        </span>
      </div>
    </>
  );
};

export default Design;
