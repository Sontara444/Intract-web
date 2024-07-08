import React from "react";
import "./CryptoDictionary.css";

function CryptoDictionary() {
  return (
      <div className="crypto-dictionary-container">
        <div className="crypto-dictionary-content">
          <h2>Crypto Dictionary</h2>
          <p>Your one-stop to catch up on all crypto terms</p>
        </div>
        <div className="crypto-dictionary-image">
          <div className="crypto-main-image">
          <img
            src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg"
            alt="crypto"
          />
          </div>
          

          <div className="crypto-dictionary-Degen">
            <div className="crypto-dictionary-box">
              <h2>Web3 + Degen Glossary</h2>
              <p>Your own crypto dictionary</p>
            </div>
          </div>
          <div className="crypto-dictionary-img">
            <i className="fa-solid fa-book-open"></i>
          </div>
        </div>
      </div>
  );
}

export default CryptoDictionary;
