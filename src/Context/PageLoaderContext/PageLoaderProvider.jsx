/* eslint-disable no-unused-vars */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation } from "react-router-dom";

// Create PageLoaderContext
const PageLoaderContext = createContext();

// PageLoaderProvider component
// eslint-disable-next-line react/prop-types
export const PageLoaderProvider = ({ children }) => {
  const location = useLocation();
  const [show, setShow] = useState(true); // Initially show loader
  const [loading, setLoading] = useState(false);

  // Ensure loader shows immediately on route change
  useEffect(() => {
    setLoading(true); // Trigger loading on route change
    setShow(true); // Show the loader immediately

    // Simulate loading completion (data fetching or process) after some delay
    const timer = setTimeout(() => {
      setShow(false); // Hide loader after timeout (adjust as needed)
      setLoading(false); // Set loading to false after the simulated delay
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [location.pathname]);

  const updateShow = useCallback((newShowState) => setShow(newShowState), []);

  return (
    <PageLoaderContext.Provider value={{ show, updateShow, loading }}>
      {children}
    </PageLoaderContext.Provider>
  );
};

// Custom hook to use PageLoaderContext
// eslint-disable-next-line react-refresh/only-export-components
export const usePageLoader = () => {
  const context = useContext(PageLoaderContext);
  if (!context) {
    throw new Error("usePageLoader must be used within a PageLoaderProvider");
  }
  return context;
};
