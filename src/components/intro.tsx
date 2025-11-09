import React from "react";

// Import images
import heroLogo from "../assets/img/logo/logo.svg";
import arrowIcon from "../assets/img/hero/arrow.png";
import heroImage from "../assets/img/hero/01.jpg";

// Import data
import { companyInfo, socialLinks } from "../data/contactInfo";

const Hero: React.FC = () => {
  return (
    <section className="hero-section hero-1 fix">
      {/* === Social + Logo === */}
      <div className="hero-social">
        <a href="/" className="hero-logo">
          <img src={heroLogo} alt="logo" />
        </a>
        <ul className="social-list">
          <li>
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url}>
                {social.name}
              </a>
            ))}
          </li>
        </ul>
      </div>

      {/* === Hero Content === */}
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                {companyInfo.slogan}
              </h1>

              <div className="arrow-icon">
                <img src={arrowIcon} alt="arrow" />
              </div>

              <div className="hero-counter-items">
                <div className="counter-box">
                  <h2>
                    <span className="counter-number">4.98</span>
                  </h2>
                  <div className="content">
                    <div className="star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <p>Best rated agency</p>
                  </div>
                </div>

                <div className="counter-box">
                  <h2>
                    <span className="counter-number">98</span>+
                  </h2>
                  <div className="content">
                    <p>Genuine repeated</p>
                    <p>happy customers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* === Hero Image === */}
          <div className="col-lg-6">
            <div className="hero-image">
              <img src={heroImage} alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
