import React, { useState } from "react";
import images from "../../constants/images";
import "./Navbar.css";
import { RiDownload2Line } from "react-icons/ri";
import { MdDownloadDone } from "react-icons/md";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import pdfFile from "../../files/Estudio.pdf";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const downloadPdf = () => {
    const button = document.querySelector(
      ".app__navabr-content_second-download"
    );
    const paragraph = document.querySelector(".paragraph");
    const line = document.querySelector(".line");
    const download = document.querySelector(".icon-download");
    const check = document.querySelector(".icon-check");
    fetch(pdfFile)
      .then((response) => response.blob())
      .then((blob) => {
        const fileName = "Estudio.pdf";
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
      });
    check.style.display = "flex";
    button.style.background = "var(--green-web)";
    paragraph.style.display = "none";
    line.style.display = "none";
    download.style.display = "none";
  };
  return (
    <nav className="app__navbar">
      <div className="app__navabr-content">
        <a href="#Home" className="navbar-links">
          <p>Home</p>
        </a>
        <a href="#About" className="navbar-links">
          <p>About</p>
        </a>
        <a href="#Skills" className="navbar-links">
          <p>Skills</p>
        </a>
      </div>
      <div className="app__navbar-logo">
        <img className="app__navbar-logo_img" src={images.logo} alt="Logo" />
      </div>
      <div className="app__navabr-content">
        <a href="#Proyects" className="app__navbar-content_contact navbar-links">
          <p>Proyects</p>
        </a>
        <a href="#Contact" className="app__navbar-content_contact navbar-links">
          <p>Contact</p>
        </a>
        <button
          className="app__navabr-content_second-download"
          onClick={downloadPdf}
        >
          <p className="paragraph">Curriculum</p>
          <div className="line"></div>
          <RiDownload2Line className="icon-download" />
          <MdDownloadDone className="icon-check" />
        </button>
      </div>

      {toggleMenu ? (
        <RxCross2
          className="icon-hamburger"
          color="#fff"
          size={27}
          onClick={() => setToggleMenu(false)}
        />
      ) : (
        <RxHamburgerMenu
          className="icon-hamburger"
          onClick={() => setToggleMenu(true)}
        />
      )}
      {toggleMenu && (
        <div className="app__navbar-menu_container">
          <a href="#Home" className="navbar-links">
            <p>Home</p>
          </a>
          <a href="#About" className="navbar-links">
            <p>About</p>
          </a>
          <a href="#Skills" className="navbar-links">
            <p>Skills</p>
          </a>
          <a
            href="#Proyects "
            className="app__navbar-content_contact navbar-links"
          >
            <p>Proyects</p>
          </a>
          <a
            href="#Contact"
            className="app__navbar-content_contact navbar-links"
          >
            <p>Contact</p>
          </a>
          <button
            className="app__navabr-content_second-download"
            onClick={downloadPdf}
          >
            <p className="paragraph">Curriculum</p>
            <div className="line"></div>
            <RiDownload2Line className="icon-download" />
            <MdDownloadDone className="icon-check" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
