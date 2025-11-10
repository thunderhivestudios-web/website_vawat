import React from "react";
import { translations } from "./translations";
import { useLanguage } from "../../contexts/languageContext";

import subTitleIcon from "../../assets/img/icon/subTitleIcon.svg";
import coreFeatureThumb from "../../assets/img/core-feature/coreFeatureThumb2_1.jpg";

const serviceDelays = ["0.2s", "0.4s", "0.7s"];

interface ServicesProps {
  onSelectService: (index: number) => void;
  hiddenIndices?: number[];
}

const Services: React.FC<ServicesProps> = ({ onSelectService, hiddenIndices = [] }) => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="core-feature-section section-padding fix" id="services">
      <div className="container">
        <div className="core-feature-wrapper style1 relative">
          <div className="row gy-5 gx-64 items-center">
            <div className="col-lg-6">
              <div className="core-feature-content">
                <div className="section-title mb-4">
                  <span className="subtitle wow fadeInUp flex items-center gap-2">
                    <img src={subTitleIcon} alt="icon" />
                    {t.sectionSubtitle}
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    {t.sectionTitle}
                  </h2>
                </div>

                {t.services.map((service, index) => {
                  const delay = serviceDelays[index] || "0.3s";
                  const isHidden = hiddenIndices.includes(index);

                  return (
                    <div
                      key={index}
                      className={`core-feature-box style1 wow fadeInUp service-box cursor-pointer }`}
                      data-wow-delay={delay}
                      onClick={() => {
                        if (!isHidden) onSelectService(index);
                      }}
                    >
                      <div className="title-wrap flex items-center gap-3">
                        <span className="whitespace-nowrap">{service.title}</span>
                      </div>

                      <p className="text">{service.text}</p>

                      <div className={`icon ${isHidden ? "invisible" : ""}`}>
                        <i className="fa-regular fa-arrow-down-right"></i>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="core-feature-thumb wow img-custom-anim-right relative">
                <img
                  src={coreFeatureThumb}
                  alt="Core feature"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
