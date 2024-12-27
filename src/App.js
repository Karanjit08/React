import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import Footer from "./component/Footer.js";



var AppLayout = () => {
  return (
    <div className="app-layout">
         <Header />
         <Body />
         <Footer />
    </div>
   
  );
};

const root = createRoot(document.querySelector("#parent-container"));
root.render(<AppLayout />);
