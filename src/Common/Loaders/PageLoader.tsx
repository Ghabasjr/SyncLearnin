/* eslint-disable no-unused-vars */
import { usePageLoader } from "../../Context/PageLoaderContext/PageLoaderProvider/PageLoaderProvider";
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
