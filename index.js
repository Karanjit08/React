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
        <h1>I am h1 tag</h1>
    </div>
</div>

*/


const parent = React.createElement(
    "div",{id:"parent"},
    [
        React.createElement(
            "div",{id:"child"},[
                React.createElement("h1",{},"I am an h1 tag"),
                React.createElement("h2",{},"I am an h2 tag")
            ]),
        React.createElement(
                "div",{id:"chil2"},[
                    React.createElement("h3",{},"I am an h3 tag"),
                    React.createElement("h4",{},"I am an h4 tag")
            ])
    ]
    );

const root = ReactDOM.createRoot(document.querySelector("#parent-container"));
root.render(parent);

