import React from "react";

const Mainquiz = ({ quiestion }) => {
  const { correctAnswer, id, options, question } = quiestion;
  console.log(quiestion);
  return (
    <div>
      <div className=" flex justify-center ">
        <p className="bg-emerald-600 p-5 rounded-xl font-bold text-white m-6 w-80">
          {question}
        </p>
      </div>
      <div className="  ">
        <div>
          <div className="flex justify-center">
            <input type="radio" name={id} id="quiz" />
            <label htmlFor="quiz">
              {" "}
              <p className="m-4"> A: {options[0]}</p>{" "}
            </label>
          </div>
          <div className="flex justify-center">
            <input type="radio" name={id} id="quiz2" />
            <label htmlFor="quiz2">
              {" "}
              <p className="m-4">B: {options[1]}</p>{" "}
            </label>
          </div>
          <div className="flex justify-center">
            <input type="radio" name={id} id="quiz3" />
            <label htmlFor="quiz3">
              {" "}
              <p className="m-4">C: {options[2]}</p>{" "}
            </label>
          </div>
          <div className="flex justify-center">
            <input type="radio" name={id} id="quiz4" />
            <label htmlFor="quiz4">
              {" "}
              <p className="m-4">D: {options[3]}</p>{" "}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainquiz;
