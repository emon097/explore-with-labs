import React from "react";

const Qna = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold mt-12 p-2 rounded-xl md:ml-72 md:mr-72 text-white bg-emerald-500">
          What is the purpuse of React Router
        </h1>
        <p className="bg-indigo-600 mt-6 rounded-lg p-5 text-white md:ml-72 md:mr-72 ">
          React Router is a standard library for routing in React. <br /> It
          enables the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL. <br />
          Let us create a simple application to React to understand how the
          React Router works. <br /> The application will contain three
          components: home component, about a component, and contact component.{" "}
          <br /> We will use React Router to navigate between these components.
        </p>
      </div>
      <div>
        <h1 className="font-bold mt-12 p-2 rounded-xl md:ml-72 md:mr-72 text-white bg-emerald-500 ">
          How Does Context API Works{" "}
        </h1>
        <p className="bg-indigo-600 mt-6 rounded-lg p-5 text-white md:ml-72 md:mr-72 ">
          The React Context API is a way for a React app to effectively produce{" "}
          <br />
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,{" "}
          <br />
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>
      <div>
        <h1 className="font-bold mt-12 md:ml-72 md:mr-72 p-2 rounded-xl text-white bg-emerald-500 ">
          What is The use Ref
        </h1>
        <p className="bg-indigo-600 mt-5 rounded-lg p-5 text-white md:ml-72 md:mr-72 ">
          Use Ref is a React Hook. The useRef Hook allows you to persist values
          between renders. <br /> It can be used to store a mutable value that
          does not cause a re-render when updated. <br /> It can be used to
          access a DOM element directly.
        </p>
      </div>
    </div>
  );
};

export default Qna;
