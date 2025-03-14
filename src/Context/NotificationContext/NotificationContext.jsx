/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const extractErrorMessage = (error) => {
  console.error("Error:", error);
  return (
    error.response?.data?.error ||
    error.response?.data?.message ||
    "An unexpected error occurred."
  );
};

// Create Notification Context
// eslint-disable-next-line react-refresh/only-export-components
export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const showNotification = (severity, summary, details) => {
    const detail =
      typeof details === "object" ? extractErrorMessage(details) : details;

    const options = {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };

    switch (severity) {
      case "success":
        toast.success(`${summary}: ${detail}`, options);
        break;
      case "error":
        toast.error(`${summary}: ${detail}`, options);
        break;
      case "warn":
        toast.warn(`${summary}: ${detail}`, options);
        break;
      case "info":
        toast.info(`${summary}: ${detail}`, options);
        break;
      default:
        toast(`${summary}: ${detail}`, options);
        break;
    }
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      <ToastContainer />
      {children}
    </NotificationContext.Provider>
  );
};

// Custom Hook to use Notification Context
// eslint-disable-next-line react-refresh/only-export-components
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

export default NotificationProvider;
