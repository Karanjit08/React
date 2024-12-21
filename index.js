import React from "react";
import { createRoot } from "react-dom/client";



var HeaderComponent = () =>{
    return <div>
        <span>
            <img src="https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/68044/optimized_product_thumb_stage.jpg"></img>
        </span>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
        </ul>
    </div>
}



var AppComponent = () =>{
    // HEADER
    <HeaderComponent/>


    // BODY



    // FOOTER
}

const root = createRoot(document.querySelector("#parent-container"));
root.render(<AppComponent />);