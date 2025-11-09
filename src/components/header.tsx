import React, { useEffect, useState } from "react";
import headerLogo from "../assets/img/logo/header-logo.svg";
import blackLogo from "../assets/img/logo/black-logo.svg";

import { navLinks } from "../data/contactInfo";
import { useViewport } from "../contexts/viewportContext";

interface HeaderProps {
  onSidebarToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => {
  const [isSticky, setIsSticky] = useState(false);
  const { isMobile } = useViewport();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header-sticky" className={`header-1 ${isSticky ? "sticky" : ""}`}>
      <div className="container-fluid">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <div className="logo">
              <a href="/" className="header-logo">
                <img src={headerLogo} alt="logo" />
              </a>
              <a href="/" className="header-logo-2">
                <img src={blackLogo} alt="logo" />
              </a>
            </div>

            <div className="header-right d-flex justify-content-end align-items-center">
              {!isMobile && (
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        {navLinks.map((link) => (
                          <li key={link.href} className={link.className || ""}>
                            <a href={link.href}>{link.label}</a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}

              {/* === Sidebar Toggle Button === */}
              <div className="header__hamburger d-xl-block my-auto">
                <div className="sidebar__toggle" onClick={onSidebarToggle}>
                  <div className="header-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
