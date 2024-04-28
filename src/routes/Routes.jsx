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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/addItem"),
      },
      {
        path: "addArtAndCraft",
        element: <AddItem></AddItem>,
      },
      {
        path: "viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addItem/${params.id}`),
      },
      {
        path: "allArtAndCraft",
        element: <AllItem></AllItem>,
      },
      {
        path: "myList",
        element: <MyList></MyList>,
      },
      {
        path: "update",
        element: <UpdateItem></UpdateItem>,
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
