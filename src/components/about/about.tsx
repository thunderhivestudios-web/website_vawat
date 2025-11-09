import React from "react";
import { contactInfo, companyInfo } from "../../data/contactInfo";
import { translations } from "./translations";
import { useLanguage } from "../../contexts/languageContext";

import aboutThumb1 from "../../assets/img/about/aboutThumb1_1.jpg";
import aboutThumb2 from "../../assets/img/about/aboutThumb1_2.jpg";
import aboutShape from "../../assets/img/shape/aboutShape1_1.png";
import subTitleIcon from "../../assets/img/icon/subTitleIcon.svg";

const aboutProfileThumb =
  "https://media.licdn.com/dms/image/v2/C5603AQGxkn7C3lDKUA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517656640476?e=1764201600&v=beta&t=LENLp5MUZskcvZMo_MSzuFzf9Dq_TH7DDVGv8A7bn9U";

const About: React.FC = () => {
  const { lang } = useLanguage();
  const text = translations[lang];

  return (
    <section className="about-section section-padding fix" id="about">
      <div className="container">
        <div className="about-wrapper style1">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-thumb">
                <div className="thumb1 img-custom-anim-left wow" data-wow-duration="1.5s" data-wow-delay="0.3s">
                  <img src={aboutThumb1} alt="about thumb 1" />
                </div>

                <div className="thumb2 img-custom-anim-top wow" data-wow-duration="1.5s" data-wow-delay="0.5s">
                  <img src={aboutThumb2} alt="about thumb 2" />
                </div>

                <div className="shape">
                  <img src={aboutShape} alt="shape" />
                </div>

                <div className="counter-box">
                  <h2>
                    <span className="counter-number">{companyInfo.yearsExperience}</span>+
                  </h2>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="subtitle wow">
                    <img src={subTitleIcon} alt="icon" /> {text.subtitle}
                  </span>

                  <h2 className="splt-txt wow fadeInUp" data-wow-delay=".3s">
                    {text.title}
                  </h2>

                  <p className="text wow fadeInUp" data-wow-delay=".5s" style={{ whiteSpace: "pre-line" }}>
                    {text.description}
                  </p>
                </div>

                <div className="contact-meta">
                  <div className="btn-wrapper wow fadeInUp" data-wow-delay="0.3s">
                    <a className="theme-btn" href="about.html">
                      {text.buttonText} <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                    </a>
                  </div>

                  <div className="profile-meta wow fadeInUp" data-wow-delay="0.5s">
                    <div className="thumb">
                      <img
                        src={aboutProfileThumb}
                        alt="about profile"
                        style={{ borderRadius: "50%", objectFit: "cover", width: "58px", height: "58px" }}
                      />
                    </div>
                    <div className="content">
                      <div className="name">{contactInfo.name}</div>
                      <div className="designation">{contactInfo.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
