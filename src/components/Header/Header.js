import React from "react";
import "./Header.css";
import Lottie from "lottie-react";
import quiz from "../quiz.json";
import Body from "../Body/Body";
import { useLoaderData } from "react-router-dom";

const Header = () => {
  const body = useLoaderData();
  const { data } = body;
  console.log(body);
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white bg-indigo-500 uppercase rounded-full bg-teal-accent-400">
                  Play Your Quiz
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Take Your Test
                <br className="hidden md:block" />
                And Grow Your{" "}
                <span className="inline-block text-deep-purple-accent-400">
                  Programming Knowledge
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                If you know programming then it won't because you need to
                understand that take a test here to see how much you know.
              </p>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <Lottie animationData={quiz}></Lottie>
          </div>
        </div>
      </div>

      <div className=" bg-emerald-500  md:p-10 mobile ">
        {data.map((body) => (
          <Body body={body} key={body.id}></Body>
        ))}
      </div>
    </div>
  );
};

export default Header;
