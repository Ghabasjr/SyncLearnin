/* eslint-disable no-unused-vars */
import React from "react";
import { usePageLoader } from "../../../contexts/PageLoaderContext/PageLoaderProvider";
import "./pageloader.css";

// PageLoader component
const PageLoader = () => {
  const { show } = usePageLoader();

  return show ? <Loader /> : null; // Show loader when `show` is true
};

export default PageLoader;

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};
