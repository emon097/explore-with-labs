import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Qna from "./components/Qna/Qna";
import Analysis from "./components/Analysis/Analysis";
import Body from "./components/Body/Body";
import QuizPage from "./components/QuizPage/QuizPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Header></Header>,
        },
        {
          path: "/header",
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Header></Header>,
        },
        {
          path: "/body/:bodyid",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.bodyid}`
            );
          },
          element: <QuizPage></QuizPage>,
        },

        {
          path: "/qna",
          element: <Qna></Qna>,
        },
        {
          path: "/analysis",
          element: <Analysis></Analysis>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
