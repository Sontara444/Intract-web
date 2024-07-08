import React, { useState, useEffect } from "react";

import data from "./data";
import "./Slider.css";

function Slider() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 30000000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <section className="section-container">
        <div className="section-header">
           <h2>Daily New Alpha for You</h2>
    </div>
        
    <div className="section">
        
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <div className="slider-container">
                  <div className="slider-left-image">
                    <img src={image} alt={name} className="person-img" />
                  </div>
                <div className="slider-right">
                  <div className="slider-right-content">
                    <div className="slider-right-top">
                      <p className="title">{title}</p>
                      <p className="text">{quote}</p>
                    </div>
                    <div className="slider-right-middle">
                      <div className="slider-right-middle-image">
                      </div>
                    </div>
                    <div className="slider-right-bottom">
                      <button className="slider-button">{name}</button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}><i className="fa-solid fa-chevron-left"></i></button>
        <button className="next" onClick={() => setIndex(index + 1)}><i class="fa-solid fa-chevron-right"></i></button>
      </div>
    </div>
    </section>
  );
}

export default Slider;
