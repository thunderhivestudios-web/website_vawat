import React, { useState } from "react";
import "./App.css";

import Preloader from "./components/preloader";
import Header from "./components/header";
import Intro from "./components/intro";
import Offcanvas from "./components/offCanvas";
import About from "./components/about/about";
import Services from "./components/services/services";
import Footer from "./components/footer/footer";

import { LanguageProvider } from "./contexts/languageContext";
import { ViewportProvider } from "./contexts/viewportContext";

const App: React.FC = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  return (
    <ViewportProvider>
      <LanguageProvider>
        <button id="back-top" className="back-to-top">
          <i className="fa-solid fa-chevron-up"></i>
        </button>

        <Offcanvas
          isOpen={isOffcanvasOpen}
          onClose={() => setIsOffcanvasOpen(false)}
        />
        <div className="offcanvas__overlay"></div>

        <header className="header-section-3">
          <Header onSidebarToggle={() => setIsOffcanvasOpen(true)} />
        </header>

        <main>
          <section className="intro-section fix" id="home">
            <Intro />
          </section>

          {/* About Section */}
          <section className="about-section fix section-padding" id="about">
            <About />
          </section>

          <Services />
        </main>

        <footer className="footer-section">
          <Footer />
        </footer>
      </LanguageProvider>
    </ViewportProvider>
  );
};

export default App;
