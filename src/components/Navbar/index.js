import './navbar.css';

const Navbar = (prop) => {
  return (
    <div className="nav-container">
      <p className="logo">
        AirData
      </p>
      <button title="Click me to get User Details" className="nav-btn" onClick={prop.getUserData}>
      Get users
      </button>
    </div>
  )
}
export default Navbar;
