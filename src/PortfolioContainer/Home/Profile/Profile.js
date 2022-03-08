import React from "react";
import Typical from "react-typical";
import "./Profile.css";

/*
Main .js file for handling header management
*/

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.instagram.com/flyinfiesta/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/austin-mestayer-5578a41a0/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              <span className="highlighted-text">Austin Mestayer</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Software Engineer",
                    1000,
                    "Web Development",
                    1000,
                    "Database Management",
                    1000,
                    "Systems Management",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Full-stack website developer using React, Node.js, and RXJS.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Get In Touch{" "}
            </button>

            <a href="ehizcv.pdf" download="Austin Mestayer.pdf">
              <button className="btn highlighted-btn">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  );
}
