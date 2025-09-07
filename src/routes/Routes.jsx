import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import SignIn from "../components/Page/Authentication/SignIn";
import Register from "../components/Page/Authentication/Register";
import Colleges from "../components/Colleges/Colleges";
import Admission from "../components/Admission/Admission";
import MyCollege from "../components/MyCollege/MyCollege";
import CollegeDetails from "../components/CollegeDeatils/CollegeDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/registration",
        element: <Register></Register>,
      },
      {
        path: "colleges",
        element: <Colleges></Colleges>,
        // loader: async () => {
        //   const collegesData = await fetch("/colleges.json");
        //   const colleges = await collegesData.json();
        //   console.log(colleges);
        //   return { colleges };
        // },
      },
      {
        path: "admission",
        element: <Admission></Admission>,
      },
      {
        path: "my-college",
        element: (
          <PrivateRoute>
            <MyCollege></MyCollege>
          </PrivateRoute>
        ),
      },
      {
        path: "college-details/:id",
        element: <CollegeDetails></CollegeDetails>,
      },
    ],
  },
]);
export default router;
