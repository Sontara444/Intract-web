import React from "react";
import "./Popular.css";
import exploreData from "./popularData";
import peopleData from "./popularPeople";

function Popular() {
  return (
    <div className="popular">
      <div className="popular-header">
        <h2>Popular Narratives</h2>
      </div>
      <div className="all-popular-container">
        <div className="popular-container-top">
          <div className="popular-explore-left">
            {exploreData.map((item, index) => {
              return (
                <div className="popular-explore-farcaster" key={index}>
                  <div className="popular-explore-farcaster-top">
                    <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                  </div>
                  <div className="popular-explore-farcaster-middle">
                  <div className="explore-images">
                  <p>{item.quote}</p>
                  <div className="multiple-images">
                    <img src={item.image1} alt="" />
                    <img src={item.image2} alt="" />
                    <img src={item.image3} alt="" />
                  </div>
                  </div>
                    <h6>{item.lines}</h6>
                  </div>
                  <div className="popular-explore-farcaster-bottom">
                    <img src={item.dollerImg} alt="" />
                    <p>{item.dollerNum}</p>
                  </div>
                  <div className="popular-explore-farcaster-button">
                    <button>{item.button}</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="popular-explore-right">
            <div className="popular-explore-right-content">
              <div className="popular-small-container">
                {peopleData.map((item, index) => {
                  return (
                    <div className="popular-small-items" key={index}>
                      <div className="popular-small-items-image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="popular-small-items-contents">
                        <p>{item.name}</p>
                        <h2>{item.title}</h2>
                      </div>
                      <div className="popular-slider">
                        <div className="scrolling-wrap">
                          <div className="comm ">
                          <img src={item.dollerImg} alt="" />
                           <p>{item.dollerNum}</p>
                          </div>
                          <div className="comm ">
                          <img src={item.dollerImg} alt="" />
                           <p>{item.dollerNum}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="popular-container-top">
          <div className="popular-explore-left">
            {exploreData.map((item, index) => {
              return (
                <div className="popular-explore-farcaster" key={index}>
                  <div className="popular-explore-farcaster-top">
                    
                    <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                  </div>
                  <div className="popular-explore-farcaster-middle">
                  <div className="explore-images">
                  <p>{item.quote}</p>
                  <div className="multiple-images">
                    <img src={item.image1} alt="" />
                    <img src={item.image2} alt="" />
                    <img src={item.image3} alt="" />
                  </div>
                  </div>
                    
                    <h6>{item.lines}</h6>
                  </div>
                  <div className="popular-explore-farcaster-bottom">
                    <img src={item.dollerImg} alt="" />
                    <p>{item.dollerNum}</p>
                  </div>
                  <div className="popular-explore-farcaster-button">
                    <button>{item.button}</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="popular-explore-right">
            <div className="popular-explore-right-content">
              <div className="popular-small-container">
                {peopleData.map((item, index) => {
                  return (
                    <div className="popular-small-items" key={index}>
                      <div className="popular-small-items-image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="popular-small-items-contents">
                        <p>{item.name}</p>
                        <h2>{item.title}</h2>
                      </div>
                      <div className="popular-slider">
                        <div className="scrolling-wrap">
                          <div className="comm ">
                          <img src={item.dollerImg} alt="" />
                           <p>{item.dollerNum}</p>
                          </div>
                          <div className="comm ">
                          <img src={item.dollerImg} alt="" />
                           <p>{item.dollerNum}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="popular-container-top">
          <div className="popular-explore-left">
            {exploreData.map((item, index) => {
              return (
                <div className="popular-explore-farcaster" key={index}>
                  <div className="popular-explore-farcaster-top">
                    <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                  </div>
                  <div className="popular-explore-farcaster-middle">
                  <div className="explore-images">
                  <p>{item.quote}</p>
                  <div className="multiple-images">
                    <img src={item.image1} alt="" />
                    <img src={item.image2} alt="" />
                    <img src={item.image3} alt="" />
                  </div>
                  </div>
                    <h6>{item.lines}</h6>
                  </div>
                  <div className="popular-explore-farcaster-bottom">
                    <img src={item.dollerImg} alt="" />
                    <p>{item.dollerNum}</p>
                  </div>
                  <div className="popular-explore-farcaster-button">
                    <button>{item.button}</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="popular-explore-right">
            <div className="popular-explore-right-content">
              <div className="popular-small-container">
                {peopleData.map((item, index) => {
                  return (
                    <div className="popular-small-items" key={index}>
                      <div className="popular-small-items-image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="popular-small-items-contents">
                        <p>{item.name}</p>
                        <h2>{item.title}</h2>
                      </div>
                      <div className="popular-slider">
                        <div className="scrolling-wrap">
                          <div className="comm ">
                          <img src={item.dollerImg} alt="" />
                           <p>{item.dollerNum}</p>
                          </div>
                          <div className="comm ">
                          <img src={item.dollerImg} alt="" />
                           <p>{item.dollerNum}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <button className="popular-see-more-btn">See More</button>
    </div>
  );
}

export default Popular;
