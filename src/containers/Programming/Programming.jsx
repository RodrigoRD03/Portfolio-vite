import React from "react";
import { RxCross1, RxDoubleArrowRight } from "react-icons/rx";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { data } from "../../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Programming.css";

const Programming = () => {

  return (
    <>
      <div className="app__programming-title">
        <h1>Programming</h1>
        <span
          onClick={() => {
            const sectionOptions = document.querySelector(
              ".app__proyects-option_programming-open"
            );
            sectionOptions.classList.remove("open");
          }}
        >
          <RxCross1 />
        </span>
      </div>
      <div className="app__programming-carrousel_section">
        {data.listprogramming.map((item) => (
          <div
            key={item.id}
            id={`${item.id}`}
            className="app__programming-carrousel_img"
          >
            <div className="app__programming-carrousel_arrows">
              <a href={`#${item.id - 1}`} >
                <span id={`rowTop-${item.id}`}>
                  <MdOutlineKeyboardArrowUp />
                </span>
              </a>
              <div className="line-row" />
              <a href={`#${item.id + 1}`} >
                <span id={`rowDawn-${item.id}`}>
                  <MdOutlineKeyboardArrowDown />
                </span>
              </a>
            </div>
            <a
              href={item.url}
              className="url-page"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <p>View</p>{" "}
              <span>
                {" "}
                <RxDoubleArrowRight />{" "}
              </span>{" "}
            </a>
            <img src={item.media} alt={item.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Programming;
