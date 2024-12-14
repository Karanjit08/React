import React from "react";
import { createRoot } from "react-dom/client";

//  JSX -> HTML Like Syntax


// REACT ELEMENT
const heading = (
    <h1 className="heading">
    This is Heading created using JSX
    </h1>
);

// const root = createRoot(document.querySelector("#parent-container"));
// root.render(heading);


// REACT FUNCTIONAL COMPONENT

const HeadingComponent1 = () =>{
    return <h1>This is the heading functional component</h1>
}
// OR 
const HeadingComponent2 = () => <h1>This is the heading functional component</h1>
// OR
const HeadingComponent3 = () => (<h1>This is the heading functional component</h1>);

// RENDERING FUNCTIONAL COMPONENT ON TO THE PAGE

// const root = createRoot(document.querySelector("#parent-container"));
// root.render(<HeadingComponent1 />);



// USING ONE FUNCTIONAL COMPONENT INSIDE ANOTHER FUNCTIONAL COMPONENT

const Component1 = () =>{
    return <h1>This is Title</h1>
}

const Component2 = () => {
    return <div>
        < Component1 />
        <i>This is heading</i>
    </div>
}

// const root = createRoot(document.querySelector("#parent-container"));
// root.render(< Component2 />);


// WRITING JAVASCRIPT INSIDE THE JSX

const Calculate = () =>( <i>This is bold</i>);
const Component3 = () =>{
    return <div>
        {Calculate()}

        {/* // JAVASCRIPT FUNCTION CAN ALSO BE RENDERED AS SAME AS WE RENDER COMPONENTS IN THE BELOW LINE 60 CODE*/}
        <Calculate />
        <h1>This is new</h1>
    </div>
}

const root = createRoot(document.querySelector("#parent-container"));
root.render(< Component3 />);


// PUTTING REACT ELEMENT (JSX) INSIDE A COMPONENT


const reactElement = 
    <h1 className="heading">
    This is Heading created using JSX
    </h1>


const Component4 = () =>{
    return <div>
        {reactElement}
        <h1>This is h1 tag</h1>
    </div>
}

// const root = createRoot(document.querySelector("#parent-container"));
// root.render(<Component4 />);

