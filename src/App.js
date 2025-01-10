import React, { lazy, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import Footer from "./component/Footer.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
// import About from "./component/About.js";
import Contact from "./component/Contact.js";
import Error from "./component/Error.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

// LAZY LOADING FOR ABOUT US COMPONENT WHICH MAKES THE REACT APP OPTIMISED in line 15,41. Only 2 lines of code. This will make the app high performance

var About = lazy(() => import("./component/About.js"));

var AppLayout = () => {
  var [userName, setUserName] = useState();

  useEffect(() => {
    var data = {
      name: "Virat Kohli",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>  
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app-layout">
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

var appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = createRoot(document.querySelector("#parent-container"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
