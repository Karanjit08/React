import { useEffect, useState } from 'react';
import logo from '../../assets/images/header_logo.jpg';
import { Link } from 'react-router';

var Header = () => {


  var [buttonText, setButtonText] = useState("Login");


  useEffect(() =>{
    console.log('Use Effect Header Called');
  },[])

  console.log("Header Rendered");

  return (
    <div className="h-[15vh] w-screen bg-blue-400 flex justify-between items-center">
      <div>
        <Link to={"/"}>
        <img
          src= {logo}
        ></img>
        </Link>
      </div>
      <div className="w-[50vw] gap-[20] flex justify-evenly">
        <a className="text-[20px] font-normal "><Link to={"/"}>Home</Link></a>
        <a  className="text-[20px] font-normal "><Link to={"/about"}>About</Link></a>
        <a  className="text-[20px] font-normal "><Link to={"/contact"}>Contact Us</Link></a>
        <a  className="text-[20px] font-normal ">Cart</a>
        <button className="py-0 px-3 cursor-pointer rounded-xl text-[20px] font-normal" onClick={() =>{
          console.log('Clicked...');
          setButtonText((prevText) => prevText == "Login" ? "Log Out" : "Login");
        }}>{buttonText}</button>
      </div>
    </div>
  );
};
console.log('Header render completed');

export default Header;