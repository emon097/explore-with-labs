import React from "react";
import Lottie from "lottie-react";
import error from "../error.json";
import "./Error.css";
const Error = () => {
  return (
    <div className="error">
      <Lottie className="animation" animationData={error}></Lottie>
    </div>
  );
};

export default Error;
