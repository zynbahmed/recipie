import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { menuSlide } from "../constants/anime"
import { navItems } from "../constants"
import Curve from "./Curve"

const Nav = ({ user, handleLogOut }) => {
  // let userOptions
  // if (user) {
  //   userOptions = (
  //     <div>
  //       <NavLink to="/">Home</NavLink>
  //       <NavLink to="/profile">Profile</NavLink>
  //       <NavLink to="/recipes">Recipes</NavLink>
  //       <NavLink to="/shoopingList">ShoppingList</NavLink>
  //       <NavLink onClick={handleLogOut} to="/">
  //         Logout
  //       </NavLink>
  //     </div>
  //   )
  // }
  // const publicOptions = (
  //   <div>
  //     <NavLink to="/">Home</NavLink>
  //     <NavLink to="/register">Registration</NavLink>
  //     <NavLink to="/login">Login</NavLink>
  //   </div>
  // )
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu"
    >
      <div className="body">
        <div className="nav">
          <div className="header">
            <img src="/logo2.png" />
          </div>
          {/* {user ? userOptions : publicOptions} */}
          {navItems.map((data, index) => (
            // <a key={index} href={data.href}>
            //   {data.title}
            // </a>
            <NavLink key={index} to={data.href}>
              {data.title}
            </NavLink>
          ))}
        </div>
      </div>
      <Curve />
    </motion.div>
  )
}

export default Nav
