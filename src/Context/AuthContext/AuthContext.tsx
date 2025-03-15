import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Define the type for the AuthContext
interface AuthContextType {
  loading: boolean;
  expired: boolean;
  updateExpired: (expired: boolean) => void;
}

// Create the context with a default value
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the type for the AuthProvider props
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider component to wrap the entire application
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [loading, setLoading] = useState<boolean>(true);
  const [expired, setExpired] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = () => {
      const sctk = sessionStorage.getItem("token") || "";

      // List of routes that do not require authentication
      const publicRoutes = ["/", "/studenttutor", "/login", "/signup", "/about", "/contact"];

      // If the user is not authenticated and the current route is not public, redirect to login
      if (!sctk && !publicRoutes.includes(location.pathname)) {
        let from = location.pathname;
        const sp = searchParams.toString();
        if (sp) {
          from += `?${sp}`;
        }
        navigate(`/login?from=${encodeURIComponent(from)}`);
      }

      setLoading(false);
    };

    checkAuth();
  }, [location.pathname, navigate, searchParams]);

  useEffect(() => {
    if (expired) {
      setExpired(false);
      navigate(`/login?expired=true`);
    }
  }, [expired, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        expired,
        updateExpired: setExpired,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
