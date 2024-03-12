import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import images from "../../constants/images";
import { MdOutlineMailOutline, MdOutlineCheck, MdKeyboardDoubleArrowUp } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const form = useRef();

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const text = document.querySelector(".text-send");
    const email = document.querySelector(".email-icon");
    const check = document.querySelector(".check-arrow");
    const button = document.querySelector("#button");

    emailjs
      .sendForm(
        "service_ttrmv7b",
        "template_zpmk3zi",
        form.current,
        "8FejOlnMBIsjEGExq"
      )
      .then(
        (result) => {
          text.style.display = "none";
          email.style.display = "none";
          button.style.background = "var(--green-web)"
          check.style.display = "flex";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <footer
      className="app__footer bg__FiguresThree"
      id="Contact"
      style={{ minHeight: `${height}px` }}
    >
      <div className="app__footer-title titles-sections">
        <h2>Contact Me</h2>
      </div>
      <div className="app__footer-form bg__clean">
        <div className="app__footer-form_img">
          <img src={images.Inbox} alt="" />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="field">
            <label htmlFor="from_name">Your Name:</label>
            <input type="text" name="from_name" id="from_name" />
          </div>
          <div className="field">
            <label htmlFor="type">Select an Option:</label>
            <select name="type" id="type">
              <option value="Design">Design</option>
              <option value="Programming">Programming</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="email">Your Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" cols="25" rows="2"></textarea>
          </div>
          <div className="field" style={{ display: "none" }}>
            <label htmlFor="reply_to">reply_to</label>
            <input type="text" name="reply_to" id="reply_to" defaultValue="non" />
          </div>
          <button className="send-form" type="submit" id="button">
            <p className="text-send">Send Email</p>
            <MdOutlineMailOutline className="email-icon" />
            <MdOutlineCheck className="check-arrow" />
          </button>
        </form>
      </div>
      <a href="#Home" className="app__footer-arrow_home"><MdKeyboardDoubleArrowUp /></a>
    </footer>
  );
};

export default Footer;
