import React from "react";
import { translations } from "./translations";
import { useLanguage } from "../../contexts/languageContext";

// Import service images and icons
import serviceThumb1 from "../../assets/img/service/serviceCardThumb1_1.jpg";
import serviceThumb2 from "../../assets/img/service/serviceCardThumb1_2.jpg";
import serviceThumb3 from "../../assets/img/service/serviceCardThumb1_3.jpg";
import serviceShape from "../../assets/img/shape/serviceShape1_1.png";
import subTitleIcon from "../../assets/img/icon/subTitleIcon.svg";

// Arrays for thumbs, icons, delays, and links
const serviceThumbs = [serviceThumb1, serviceThumb2, serviceThumb3];
const serviceIcons = ["icon-serviceIcon1_1", "icon-serviceIcon1_2", "icon-serviceIcon1_3"];
const serviceDelays = ["0.2s", "0.4s", "0.7s"];
const serviceLinks = ["service-details.html", "service-details.html", "service-details.html"];
const placeholderIcon = "icon-placeholder"; // fallback class if icon not defined

const Services: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="service-section section-padding section-bg fix" id="service">
      <div className="service-container-wrapper style1">
        <div className="shape">
          <img src={serviceShape} alt="shape" />
        </div>

        <div className="container">
          <div className="section-title maxw-470 text-center mx-auto">
            <span className="subtitle wow fadeInUp">
              <img src={subTitleIcon} alt="icon" /> {t.sectionSubtitle}
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              {t.sectionTitle}
            </h2>
          </div>

          <div className="service-wrapper style1">
            <div className="row g-4">
              {t.services.map((service, index) => {
                // Determine thumb, icon, delay, link with fallback
                const thumb = serviceThumbs[index] || serviceThumbs[serviceThumbs.length - 1];
                const icon = serviceIcons[index] || placeholderIcon;
                const delay = serviceDelays[index] || "0.3s";
                const link = serviceLinks[index] || "#";

                // Warn if data arrays are shorter than services
                if (!serviceThumbs[index]) {
                  console.warn(`Warning: No thumb defined for service index ${index}. Using fallback.`);
                }
                if (!serviceIcons[index]) {
                  console.warn(`Warning: No icon defined for service index ${index}. Using placeholder.`);
                }

                return (
                  <div key={index} className="col-xl-4 col-md-6">
                    <div
                      className="service-card style1 wow fadeInUp"
                      data-tilt
                      data-tilt-max="15"
                      data-wow-delay={delay}
                    >
                      <div className="thumb">
                        <img src={thumb} alt={service.title} />
                      </div>
                      <div className="content">
                        <h4>
                          <a href={link}>{service.title}</a>
                        </h4>
                        <p className="text">{service.text}</p>
                        <div className="icon">
                          <i className={icon}></i>
                        </div>
                      </div>
                      <div className="link-meta">
                        <a href={link}>{t.readMore}</a>
                        <a href={link}>
                          <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
