/* eslint-disable no-unused-vars */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useLocation } from "react-router-dom";

// Define context type
interface PageLoaderContextType {
  show: boolean;
  loading: boolean;
  updateShow: (newShowState: boolean) => void;
}

// Create PageLoaderContext with default values
const PageLoaderContext = createContext<PageLoaderContextType | undefined>(
  undefined
);

// Define provider props type
interface PageLoaderProviderProps {
  children: ReactNode;
}

// PageLoaderProvider component
export const PageLoaderProvider: React.FC<PageLoaderProviderProps> = ({
  children,
}) => {
  const location = useLocation();
  const [show, setShow] = useState<boolean>(true); // Initially show loader
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true); // Trigger loading on route change
    setShow(true); // Show the loader immediately

    const timer = setTimeout(() => {
      setShow(false); // Hide loader after timeout (adjust as needed)
      setLoading(false); // Set loading to false after the simulated delay
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [location.pathname]);

  const updateShow = useCallback((newShowState: boolean) => {
    setShow(newShowState);
  }, []);

  return (
    <PageLoaderContext.Provider value={{ show, updateShow, loading }}>
      {children}
    </PageLoaderContext.Provider>
  );
};

// Custom hook to use PageLoaderContext
export const usePageLoader = (): PageLoaderContextType => {
  const context = useContext(PageLoaderContext);
  if (!context) {
    throw new Error("usePageLoader must be used within a PageLoaderProvider");
  }
  return context;
};
