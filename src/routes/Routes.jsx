import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import AddItem from "../pages/AddItem";
import AllItem from "../pages/AllItem";
import MyList from "../pages/MyList";
import UpdateItem from "../components/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "addArtAndCraft",
        element: <AddItem></AddItem>,
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
    ],
  },
]);

export default router;
