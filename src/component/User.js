import { useState } from "react";


var User = (props) => {

    var [count,setCount] = useState(0);
    return (
        <div className="w-[30vw] m-[10px] p-[4px] border-2 border-black">
            <h3>Name: {props.name}</h3>
            <h3>Count: {count}</h3>
            <h3>Location: Pune</h3>
            <h4>Contact: karan@gmail.com</h4>
            <h4>Type: Functional Component</h4>
        </div>
    );
}

export default User;