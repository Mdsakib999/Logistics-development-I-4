import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
  
]);

export default router;