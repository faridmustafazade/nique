import AdminRoot from "../Pages/admin/AdminRoot";
import Profile from "../Pages/admin/Profile";
import AddMenu from "../Pages/admin/Menu/Add";
import Show from "../Pages/admin/Menu/Show";
import Message from "../Pages/admin/Message";
import MessageDetails from "../Pages/admin/Message/Details";
import AddClasses from "../Pages/admin/Classes/Add";
import ShowClass from "../Pages/admin/Classes/Show";
import Login from "../Pages/admin/Login";
import ShowUsers from "../Pages/admin/Users/Show";
import ShowBlog from "../Pages/admin/Blog/Show";
import AddBlog from "../Pages/admin/Blog/Add";
import Reservations from "../Pages/admin/Reservation";

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
import ClassesDetails from "../Pages/site/Classes/Details";
import SignIn from "../Pages/site/Sign-in";
import SignUp from "../Pages/site/Sign-up";
import UserProfile from "../Pages/User-Profile";
import WishListPage from "../Pages/site/Wishlist";
import ChangePassword from "../Pages/site/Change-Password";
import BlogDetails from "../Pages/site/Blog/Details";
import Cancel from "../Pages/site/Cancel";
import Cart from "../Pages/site/Cart";
import CheckoutSuccess from "../Pages/site/Success";
import Orders from "../Pages/admin/Orders";

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
        path: "/classes/:id",
        element: <ClassesDetails />,
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/wishlist",
        element: <WishListPage />,
      },
      {
        path: "/change-password",
        element: <ChangePassword />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/checkout-success",
        element: <CheckoutSuccess />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
    ],
  },
  {
    path: "user-profile",
    element: <UserProfile />,
  },
  {
    path: "/login-admin",
    element: <Login />,
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
        path: "/admin/classes",
        element: <ShowClass />,
      },
      {
        path: "/admin/add-classes",
        element: <AddClasses />,
      },
      {
        path: "/admin/message",
        element: <Message />,
      },
      {
        path: "/admin/message/:id",
        element: <MessageDetails />,
      },
      {
        path: "/admin/users",
        element: <ShowUsers />,
      },
      {
        path: "/admin/blog",
        element: <ShowBlog />,
      },
      {
        path: "/admin/reservation",
        element: <Reservations />,
      },
      {
        path: "/admin/order",
        element: <Orders />,
      },
      {
        path: "/admin/add-blog",
        element: <AddBlog />,
      },
    ],
  },
];
