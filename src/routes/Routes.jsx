import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import AddItem from "../pages/AddItem";
import AllItem from "../pages/AllItem";
import MyList from "../pages/MyList";
import UpdateItem from "../components/UpdateItem";
import ViewDetails from "../components/ViewDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import Details from "../components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            " https://woody-snitch-server-1vh7dfyj0-ayshas-projects-55bed21a.vercel.app/addItem"
          ),
      },
      {
        path: "addArtAndCraft",
        element: (
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        ),
      },
      {
        path: "viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://woody-snitch-server-1vh7dfyj0-ayshas-projects-55bed21a.vercel.app/addItem/${params.id}`
          ),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://woody-snitch-server-1vh7dfyj0-ayshas-projects-55bed21a.vercel.app/allItem/${params.id}`
          ),
      },
      {
        path: "allArtAndCraft",
        element: <AllItem></AllItem>,
        loader: () =>
          fetch(
            " https://woody-snitch-server-1vh7dfyj0-ayshas-projects-55bed21a.vercel.app/allItem"
          ),
      },
      {
        path: "myList",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: "myList/update/:id",
        element: (
          <PrivateRoute>
            <UpdateItem></UpdateItem>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://woody-snitch-server-1vh7dfyj0-ayshas-projects-55bed21a.vercel.app/myList/details/${params.id}`
          ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
