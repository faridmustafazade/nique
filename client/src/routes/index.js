import Home from "../Pages/site/Home";
import MainRoot from "../Pages/site/MainRoot";
import Menu from "../Pages/site/Menu";
import NotFound from "../Pages/site/Not-Found";
import Restaurant from "../Pages/site/Restaurant";

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
        path: "*",
        element:<NotFound/>
      }
    ],
  },
];
