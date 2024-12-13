import React from "react";
import { createRoot } from 'react-dom/client';

// const heading = React.createElement("h1", {
//     id: "heading1"
// }, "Hello World from React!");
// const root = ReactDOM.createRoot(document.querySelector("#parent-container"));
// const firstName = React.createElement("h2", {}, "Karanjit Singh");
// const firstNameRoot = ReactDOM.createRoot(document.querySelector("#name"));
// root.render(heading);
// firstNameRoot.render(firstName);




/* CREATING NESTED HTML STRUCTURE IN REACT 

<div id="parent">
    <div id="child">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
    <div id="chil2">
        <h3>I am an h3 tag</h3>
        <h4>I am an h4 tag</h4>
    </div>
</div>

BELOW IS THE EXAMPLE
*/

const parent = React.createElement(
    "div",{id:"parent"},
    [
        React.createElement(
            "div",{id:"child"},[
                React.createElement("h1",{},"I am h1 tag"),
                React.createElement("h2",{},"I am h2 tag")
            ]),
        React.createElement(
                "div",{id:"chil2"},[
                    React.createElement("h3",{},"I am h3 tag"),
                    React.createElement("h4",{},"I am h4 tag")
            ])
    ]
    );

const root = createRoot(document.querySelector("#parent-container"));
root.render(parent);

