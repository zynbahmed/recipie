import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { menuSlide } from "../constants/anime"
import { navItems, userItem } from "../constants"
import Curve from "./Curve"
import ThemeToggle from "./ThemeToggle"

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
      animate={{ transform: "translateX(50px)" }}
      exit={{ transform: "translateX(200px)" }}
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
        <ThemeToggle />
      </div>
      {/* <Curve /> */}
    </motion.div>
  )
}

export default Nav
