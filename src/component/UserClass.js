import React from "react";

class UserClass extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            info : {
                avatar_url : "",
                name : "Dummy",
                location : "",
                bio : ""
            }
        }
    }

    async componentDidMount() {
        var response = await fetch("https://api.github.com/users/Karanjit08");
        var data = await response.json();
        console.log(data);
        console.log(data.name)

        this.setState({
            info : data
        })
    }
    
    

    render() {
        return <div className="w-[30vw] m-[10px] p-[4px] border-2 border-black">
        <img className="w-[30vw] object-cover" src={this.state.info.avatar_url}></img>
         <h3>Name: {this.state.info.name}</h3>
            <h3>Location: {this.state.info.location}</h3>
            <h4>Bio: {this.state.info.bio}</h4>
            <h4>Type: Class Based Component</h4>
        </div>
    }
}

export default UserClass;