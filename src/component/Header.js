import logo from '../../assets/images/header_logo.jpg';

var Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src= {logo}
        ></img>
      </div>
      <div className="header-right">
        <a>Home</a>
        <a>About</a>
        <a>Contact Us</a>
        <a>Cart</a>
      </div>
    </div>
  );
};

export default Header;