import React from "react";
import User from "./User";
import UserClass from "./UserClass";




class About extends React.Component{

    

    render() {
        return (
            <div>
                <h1>This is About Page</h1>
                <UserClass name = {"Karan Class"} />
            </div>
        );
    }
}

export default About;