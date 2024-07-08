import React from "react";
import userData from "../Recommended/RecommendedData";
import "./Recommended.css";

function Recommended() {
  return (
      <section className="recommended">
        <div className="recommended-container">
          <div className="recommended-content">
            <h2>Recommended Narratives</h2>
            <p>
              See all{" "}
              <span>
                <i class="fa-solid fa-play"></i>
              </span>
            </p>
          </div>
          <div className="recommended-box">
            {userData.map((item, index) => {
              return (
                <div className="recommended-cards" key={index}>
                  {/* <div className="recommended-cards-left"> */}
                    <div className="recommended-cards-image">
                      <img src={item.image} alt="" />
                    </div>
                  {/* </div> */}
                  <div className="recommended-cards-right">
                    <div className="recommended-cards-top">
                      <h2>{item.head}</h2>
                      <p>{item.subHead}</p>
                      <p id="para">---------------------------------------</p>
                    </div>
                    <div className="recommended-cards-bottom">
                      <div className="recommended-icon-para">
                        <img src={item.dollerImg} alt="" />
                        <p>{item.para}</p>
                      </div>

                      <div className="recommended-icon">
                        <i>{item.icon}</i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  );
}

export default Recommended;
