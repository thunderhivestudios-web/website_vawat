import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo/black-logo.svg";
import { contactInfo, socialLinks, navLinks } from "../data/contactInfo";

interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

const Offcanvas: React.FC<OffcanvasProps> = ({ isOpen, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect viewport width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${isOpen ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              {/* === Header === */}
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="/">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
                <div className="offcanvas__close">
                  <button onClick={onClose}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>

              <p className="text d-none d-xl-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio sem
                semper the is erat, a feugiat leo urna eget eros. Duis Aenean a
                imperdiet risus.
              </p>

              {/* === Navigation (Mobile Only) === */}
              {isMobile && (
                <nav className="offcanvas__nav mb-4">
                  <ul className="list-unstyled">
                    {navLinks.map((link) => (
                      <li key={link.href} className="mb-2">
                        <a
                          href={link.href}
                          className={`d-block py-2 ${link.className || ""}`}
                          onClick={onClose}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" rel="noreferrer" href="#">
                        {contactInfo.address}
                      </a>
                    </div>
                  </li>

                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href={`mailto:${contactInfo.email}`}>
                        {contactInfo.email}
                      </a>
                    </div>
                  </li>

                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                    </div>
                  </li>
                </ul>

                <div className="main-button mt-4">
                  <a href="contact.html" className="theme-btn w-100 text-center">
                    Get Started{" "}
                    <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                  </a>
                </div>

                <div className="social-icon d-flex align-items-center mt-4">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.url}>
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === Overlay === */}
        <div
          className={`offcanvas__overlay ${isOpen ? "overlay-open" : ""}`}
          onClick={onClose}
        ></div>
      </div>
    </>
  );
};

export default Offcanvas;
