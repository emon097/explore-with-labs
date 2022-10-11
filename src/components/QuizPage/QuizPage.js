import React from "react";
import { useLoaderData } from "react-router-dom";
import Mainquiz from "./Mainquiz/Mainquiz";

const QuizPage = () => {
  const quiz = useLoaderData();
  const { data } = quiz;
  const { name, logo, id, questions } = data;
  return (
    <div>
      <div className="flex justify-center mt-6 ">
        <img className="w-24 rounded-xl bg-black " src={logo} alt="" />
      </div>
      <h1 className=" mt-3 text-2xl font-bold">Start Your {name} Quiz</h1>
      {questions.map((quiestion) => (
        <Mainquiz quiestion={quiestion} key={id}></Mainquiz>
      ))}
    </div>
  );
};

export default QuizPage;
