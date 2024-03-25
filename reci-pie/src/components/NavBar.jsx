import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { menuSlide } from "../constants/anime"
import { navItems, userItem } from "../constants"
import Curve from "./Curve"
import ThemeToggle from "./ThemeToggle"

const Nav = ({ user, handleLogOut }) => {
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
            {/* <img
              src={user.avatar}
              class="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"
            />
            <div class="flex flex-col ml-2">
              <span class="mt-1 text-sm font-semibold leading-none">
                {user.name}
              </span>
            </div> */}
          </div>

          {user ? (
            <>
              {userItem.map((data, index) => (
                <NavLink key={index} to={data.href}>
                  {data.title}
                </NavLink>
              ))}
              <NavLink onClick={handleLogOut} to="/">
                Logout
              </NavLink>
            </>
          ) : (
            navItems.map((data, index) => (
              <NavLink key={index} to={data.href}>
                {data.title}
              </NavLink>
            ))
          )}
        </div>
        <ThemeToggle />
      </div>
      {/* <Curve /> */}
    </motion.div>
  )
}

export default Nav
