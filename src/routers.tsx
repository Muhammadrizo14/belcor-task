import {
  createBrowserRouter,
} from "react-router-dom";
import Register from "./Pages/Register";
import App from "./App";
import Login from "./Pages/Login";
import Exam from "./Pages/Exam";
import Data from "./Pages/Data";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "exam",
    element: <Exam/>,
  },
  {
    path: "data",
    element: <Data/>,
  },
]);

export default router;