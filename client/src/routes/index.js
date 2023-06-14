import Blog from "../Pages/site/Blog";
import Classes from "../Pages/site/Classes";
import Contact from "../Pages/site/Contact";
import Home from "../Pages/site/Home";
import MainRoot from "../Pages/site/MainRoot";
import Menu from "../Pages/site/Menu";
import NotFound from "../Pages/site/Not-Found";
import Reservation from "../Pages/site/Reservation";
import Restaurant from "../Pages/site/Restaurant";
import Shop from "../Pages/site/Shop";

export const ROUTES = [
  {
    path: "",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
