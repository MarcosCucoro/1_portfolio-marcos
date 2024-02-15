import { NavLink } from "react-router-dom"
import { IoHomeOutline, IoInformationCircleOutline, IoMailOutline } from "react-icons/io5";
import "./Navbar.css"

const Navbar = () => {

  return (
    <div className="navbar-container">
      <NavLink to={"/"} className="navbar-links" >
        <IoHomeOutline id="navbar-links-icon" className={({isActive}) => (isActive ? "active" : "")} />
        Início
      </NavLink>
      <NavLink to={"aboutme"} className="navbar-links">
        <IoInformationCircleOutline id="navbar-links-icon" className={({isActive}) => (isActive ? "active" : "")}/>
        Sobre mim
      </NavLink>
      <NavLink to={"contact"} className="navbar-links">
        <IoMailOutline id="navbar-links-icon" className={({isActive}) => (isActive ? "active" : "")}/> 
        Contato
      </NavLink>
    </div>
  )
}

export default Navbar