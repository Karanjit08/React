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
    <div className="header">
      <div className="header-left">
        <Link to={"/"}>
        <img
          src= {logo}
        ></img>
        </Link>
      </div>
      <div className="header-right">
        <a><Link to={"/"}>Home</Link></a>
        <a><Link to={"/about"}>About</Link></a>
        <a><Link to={"/contact"}>Contact Us</Link></a>
        <a>Cart</a>
        <button className='login-btn' onClick={() =>{
          console.log('Clicked...');
          setButtonText((prevText) => prevText == "Login" ? "Log Out" : "Login");
        }}>{buttonText}</button>
      </div>
    </div>
  );
};
console.log('Header render completed');

export default Header;