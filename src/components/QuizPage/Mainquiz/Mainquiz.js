import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Mainquiz = ({ quiestion }) => {
  const { correctAnswer, id, options, question } = quiestion;
  console.log(correctAnswer);

  const questionans = (id) => {
    if (id === correctAnswer) {
      toast("Wow so easy!");
    } else {
      toast("Can choose swipe direction");
    }
  };

  return (
    <div>
      <div className=" flex justify-center ">
        <p className="bg-emerald-600 p-5 rounded-xl font-bold text-white m-6 w-80">
          {question}
        </p>
      </div>
      <div className="  ">
        <div>
          {options.map((op) => (
            <div className="flex justify-center">
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
