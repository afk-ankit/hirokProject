import "./Navbar.css";
import navLogo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={navLogo} alt="" width={"50%"} />
      </div>
      <div className="navbar_links">
        <a href="">Home</a>
        <a href="">Discourses</a>
        <a href="">Adventure</a>
        <a href="">Activity</a>
        <a href="">Login</a>
        <a href="">Scholarships</a>
      </div>
    </nav>
  );
};

export default Navbar;
