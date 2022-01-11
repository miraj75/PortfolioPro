import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/immirajhosen">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://github.com/miraj75">
                <i className="fa fa-github-square" />
              </a>
              <a href="https://www.instagram.com/immirajhossen/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.youtube.com/">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="https://twitter.com/Immirajhossen">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Miraj</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "JavaScript Dev 💻",
                    1000,
                    "React  Dev 📱",
                    1000,
                    "Bootstrap  Dev 🔴",
                    1000,
                    "Tailwind CSS🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="resume.pdf" download="Miraj resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
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
