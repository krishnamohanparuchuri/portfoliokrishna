import React from "react";
import "./AboutMe.css";
import logo from "../../assets/Home/krishna_pic.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function AboutMe() {
  return (
    <div id="aboutme" className="aboutme__container">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img data-aos="fade-right" src={logo} alt="krishnamohan-pict" />
          </div>
        </div>
        <div data-aos="fade-left" className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small className="light--text">3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small className="light--text">10+ WorldWide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small className="light--text">10+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            cupiditate itaque dicta nulla tenetur porro a consectetur dolores
            recusandae delectus reiciendis obcaecati deserunt cum modi, rerum
            earum debitis optio! Officiis.
          </p>

          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </div>
  );
}
