import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Body.css";
const Body = ({ body }) => {
  const { logo, name, id } = body;
  return (
    <div className="  ">
      <img className="image" src={logo} alt="" />
      <p className="text-white font-bold mr-40 mt-3 mb-4 "> {name} </p>
      <Link
        to={`/body/${id}`}
        className="mr-40 hover:bg-indigo-600 text-white bg-indigo-700 rounded-2xl p-2 font-semibold "
      >
        Test YourSelf
      </Link>
    </div>
  );
};

export default Body;
