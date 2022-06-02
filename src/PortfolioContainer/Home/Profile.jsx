import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import logo from "../../assets/Home/km_logo_v4.png";


export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-logo">
        <a href="#profile">
          <img src={logo} width="80px" height="80px" alt="logo" />
        </a>
      </div>

      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/krishnamohan.paruchuri">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/krishnamohanparuchuri/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/krishnamohanparuchuri">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://bitbucket.org/krishna_mohan_paruchuri/">
                <i className="fa fa-bitbucket"></i>
              </a>
              <a href="https://twitter.com/Krishnawebdev">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M{" "}
              <span className="highlighted-text"> Krishna Mohan Paruchuri</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1 className="profile-details-role-heading">
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    " Web Devloper 💻",
                    2000,
                    " Designer 🎨",
                    2500,
                    " Full-stack Dev 🌐",
                    2000,
                    " Backend Dev 👨🏽‍💻",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                I'm a Technology Enthusiast who is interested in Web
                Development.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="#ContactMe" className="scroll__down">
              <button className="btn primary-btn"> Hire Me</button>
            </a>
            <a href="krishna_cv" download="krishna krishna.pdf">
              <button className="btn highlighted-btn"> Download CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
