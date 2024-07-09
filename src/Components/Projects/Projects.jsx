import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <div className="projects-container">
        <div className="projects-content">
          <h2>Top Crypto Creators and Projects to Follow</h2>
          <p>Answers to your crypto doubts, straight from the experts</p>
        </div>
        <div className="projects-cards">
          <div className="projects-imgage-content">
            <figure className="snip1205">
              <img
                src="https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png"
                alt="sample42"
              />
              <i className="fa-solid fa-play"></i>
              <a href="/">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </figure>
            <div className="projects-upper-content">
              <h2>How to plan your retirement with crypto?</h2>
              
            </div>
          </div>

          <div className="projects-imgage-content">
            <figure className="snip1205">
            <img
              src="https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png"
              alt="sample44"
            />
              <i className="fa-solid fa-play"></i>
              <a href="/">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </figure>
            <div className="projects-upper-content">
              <h2>Why are there limited Bitcoin?</h2>
            </div>
          </div>

          <div className="projects-imgage-content">
            <figure className="snip1205">
            <img
              src="https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png"
              alt="sample43"
            />
              <i className="fa-solid fa-play"></i>
              <a href="/">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </figure>
            <div className="projects-upper-content">
              <h2>How does Uniswap actually work?</h2>
            </div>
          </div>

          <div className="projects-imgage-content">
            <figure className="snip1205">
            <img
              src="https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png"
              alt="sample43"
            />
              <i className="fa-solid fa-play"></i>
              <a href="/">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </figure>
            <div className="projects-upper-content">
              <h2>How to spot crypto projects to invest in?</h2>
            </div>
          </div>

         
          
         
        </div>
      </div>
    </section>
  );
}

export default Projects;
