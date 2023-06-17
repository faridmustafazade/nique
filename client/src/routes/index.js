import AdminRoot from "../Pages/admin/AdminRoot";
import Profile from "../Pages/admin/Profile";
import AddMenu from "../Pages/admin/Menu/Add";
import Show from "../Pages/admin/Menu/Show";
import Message from "../Pages/admin/Message";
import MessageDetails from "../Pages/admin/Message/Details";
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
import MenuDetails from "../Pages/site/Menu/Details";

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
        path: "/menu/:category",
        element: <MenuDetails />,
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
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "/admin",
        element: <Profile />,
      },
      {
        path: "/admin/menu",
        element: <Show />,
      },
      {
        path: "/admin/add-menu",
        element: <AddMenu />,
      },
      {
        path: "/admin/message",
        element: <Message />,
      },
      {
        path: "/admin/message/:id",
        element: <MessageDetails />,
      },
      // {
      //   path: "/shop",
      //   element: <Shop />,
      // },
      // {
      //   path: "/blog",
      //   element: <Blog />,
      // },
      // {
      //   path: "/reservation",
      //   element: <Reservation />,
      // },
      // {
      //   path: "*",
      //   element: <NotFound />,
      // },
    ],
  },
];
