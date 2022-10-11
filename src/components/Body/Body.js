import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Body.css";
const Body = ({ body }) => {
  const { logo, name, id } = body;
  return (
    <div className="device border m-5 md:p-6 ">
      <img className="image md:m-16 mt-8" src={logo} alt="" />
      <p className="text-white md:mr-5 font-bold md:mr-30 mt-3 mb-4 ">
        {" "}
        {name}{" "}
      </p>
      <Link
        to={`/body/${id}`}
        className="md:mr-30 mr-20 md:ml-16 pc hover:bg-indigo-600 text-white bg-indigo-700 ml-7 rounded-2xl p-2 font-semibold "
      >
        Test YourSelf
      </Link>
    </div>
  );
};

export default Body;
