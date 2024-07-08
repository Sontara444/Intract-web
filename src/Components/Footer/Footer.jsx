import React from 'react'
import './Footer.css'

function Footer() {
  return (
      <section className='footer'>
        <div className="footer-container">
          <div className="footer-top-container">
            <div className="footer-left-content">
              <h3>intract.</h3>
              <p id='para-two'>We are your personal guide for exploring web3 projects & earning 100x reward</p>
            </div>
            <div className="footer-right-content">
              <div className="intract">
                <h4>INTRACT</h4>
                <p>Explore Quests</p>
                <p>Communities</p>
                <p>Alpha Hub</p>
              </div>
              <div className="earn">
                <h4>EARN</h4>
                <p> Refer & Earn</p>
                <p>Leaderboard</p>
                <p>Acheivements</p>
              </div>
              <div className="about">
              <h4>ABOUT</h4>
                <p>Product Roadmap</p>
                <p>Affiliate Program</p>
                <p>Sign up Program</p>
                <p>Growth Community</p>
                <p>Blogs</p>
              </div>
              <div className="support">
              <h4>SUPPORT</h4>
                <p>Help Center</p>
                <p>Create your quest</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Community Guidelines</p>
              </div>
            </div>

          </div>
          <div className="footer-middle-container">
            <p>
            <span>Disclaimer:</span> Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.
            </p>
          </div>
          <div className="footer-bottom-container">
            <div className="footer-left-bottom">
              <p>CREATED BY </p>
              <a href="/">INTRACT</a>
            </div>
            <div className="footer-right-bottom">
              <div className="footer-border">
                <div className="footer-social-icons">
                  <a href="/">
                  <i className="fa-brands fa-twitter blue" ></i></a>
              </div>
            </div>
            <div className="footer-border">
                <div className="footer-social-icons">
                  <a href="/">
                  <i className="fa-brands fa-discord green"></i></a>
              </div>
            </div>
            <div className="footer-border">
                <div className="footer-social-icons">
                  <a href="/">
                  <i className="fa-solid fa-paper-plane blue"></i>
                  </a>
              </div>
            </div>
            <div className="footer-border">
                <div className="footer-social-icons">
                  <a href="/">
                  <i className="fa-brands fa-spotify light-green"></i>
                  </a>
              </div>
            </div>
            </div>
          </div>

        </div>
      </section>
  )
}

export default Footer