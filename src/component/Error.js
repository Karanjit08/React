import { useRouteError } from "react-router";

var Error = () =>{
    var error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oops!!</h1>
            <h2>Something went wrong</h2>
        </div>
    );
}

export default Error;