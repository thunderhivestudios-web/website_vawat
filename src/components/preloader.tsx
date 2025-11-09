import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      console.log("All assets are loaded, hiding preloader.");
      setTimeout(() => setLoaded(true), 600); // matches your delay
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div
      id="preloader"
      className={`preloader ${loaded ? "loaded fade-out" : ""}`}
    >
      <div className="animation-preloader">
        <div className="spinner"></div>

        <div className="txt-loading">
          {["V", "A", "W", "A", "T"].map((l) => (
            <span
              key={l}
              data-text-preloader={l}
              className="letters-loading"
            >
              {l}
            </span>
          ))}
        </div>

        <p className="text-center">Loading</p>
      </div>

      <div className="loader">
        <div className="row">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`col-3 loader-section ${
                i < 2 ? "section-left" : "section-right"
              }`}
            >
              <div className="bg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
