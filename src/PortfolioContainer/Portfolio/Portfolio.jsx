import React from "react";
import projects from "../../data/Projects";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div id="portfolio" className="portfolio__maincontainer">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="portfolio__container">
        {projects?.map((project) => (
          <article className="portfolio__item" key={project.id}>
            <div className="portfolio__item-members">
              <span className="portfolio__item-number">
                {project.groupmembers}
              </span>
            </div>
            <div className="portfolio__item-image">
              <img src={project.image} alt="portfolio" />
            </div>
            <h3 className="portfolio__item-title">{project.title}</h3>
            <a href={project.link} className="btn btn-primary portfolio__item-btn">
              {" "}
              Github{" "}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
