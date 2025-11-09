import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface ViewportContextProps {
  isMobile: boolean;
}

const ViewportContext = createContext<ViewportContextProps>({ isMobile: false });

interface ViewportProviderProps {
  children: ReactNode;
}

export const ViewportProvider: React.FC<ViewportProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize(); // initialize on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ isMobile }}>
      {children}
    </ViewportContext.Provider>
  );
};

// Custom hook for easier consumption
export const useViewport = () => useContext(ViewportContext);
