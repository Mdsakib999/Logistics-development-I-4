import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import ServicesPage from "../pages/Services/ServicesPage";
import AboutPage from "../pages/About/AboutPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/services",
        Component: ServicesPage,
      },
      {
        path: "/privacy-policy",
        Component: PrivacyPolicy,
      },
    ],
  },
]);

export default router;
