import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { menuSlide } from "../constants/anime"
import { navItems, userItem } from "../constants"
import Curve from "./Curve"

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <div>
        {userItem.map((data, index) => (
          <NavLink key={index} to={data.href}>
            {data.title}
          </NavLink>
        ))}
        <NavLink onClick={handleLogOut} to="/">
          Logout
        </NavLink>
      </div>
    )
  }
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
          {user
            ? userOptions
            : navItems.map((data, index) => (
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
