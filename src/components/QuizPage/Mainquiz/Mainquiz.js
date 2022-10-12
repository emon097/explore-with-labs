import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Mainquiz = ({ quiestion }) => {
  const { correctAnswer, id, options, question } = quiestion;
  console.log(correctAnswer);

  const questionans = (id) => {
    if (id === correctAnswer) {
      toast.success("This is Correct");
    } else {
      toast.warning("This is Incorrect");
    }
  };
  const ringans = (correctAnswer) => {
    toast.info(`${correctAnswer}`);
  };
  return (
    <div>
      <div className=" flex justify-center ">
        <p className="bg-emerald-600 p-5 rounded-xl font-bold text-white m-6 w-80">
          <p className="left-10 bg-indigo-800 rounded p-2 m-6 ">
            click here See Right Ans{" "}
            <FontAwesomeIcon
              className="ml-30"
              onClick={() => ringans(correctAnswer)}
              icon={faEye}
            ></FontAwesomeIcon>
          </p>
          {question}
        </p>
      </div>

      <div className="  ">
        <div>
          {options.map((op) => (
            <div className="flex items-center justify-center">
              <input
                onClick={() => questionans(op)}
                type="radio"
                name={id}
                id="quiz"
              />
              <label htmlFor="quiz">
                {" "}
                <p className="m-4"> {op}</p>{" "}
              </label>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Mainquiz;
