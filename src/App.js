import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import Footer from "./component/Footer.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./component/About.js";
import Contact from "./component/Contact.js";
import Error from "./component/Error.js";
import RestaurantMenu from "./component/RestaurantMenu.js";

var AppLayout = () => {
  return (
    <div className="app-layout">
         <Header />
         <Outlet />
         {/* <Footer /> */}
    </div>
   
  );
};


var appRouter = createBrowserRouter(
  [
    {
      path : "/",
      element : <AppLayout />,
      children: [
        {
          path : "/",
          element : <Body />
        },
        {
          path : "/about",
          element : <About />
        },
        {
          path : "/contact",
          element : <Contact />
        },
        {
          path : "/restaurants/:resId",
          element : <RestaurantMenu />
        }
      ],
      errorElement : <Error />
    },
  ]
)

const root = createRoot(document.querySelector("#parent-container"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />)
