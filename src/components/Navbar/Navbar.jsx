import "./Navbar.css";
import navLogo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={navLogo} alt="" width={"50%"} />
      </div>
      <hr />
      <hr />
      <div className="navbar_links">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/discourses"}>Discourses</NavLink>
        <NavLink to={"/adventure"}>Adventure</NavLink>
        <NavLink to={"/activity"}>Activity</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/scholarships"}>Scholarships</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
