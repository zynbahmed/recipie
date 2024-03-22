import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { menuSlide } from "../constants/anime"
import { navItems, userItem } from "../constants"
import Curve from "./Curve"
import { useState, useEffect } from "react"

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

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  )

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
    const localTheme = localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [theme])
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
        <input
          type="checkbox"
          onChange={handleToggle}
          checked={theme === "light" ? false : true}
          value="synthwave"
          className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
        />
      </div>
      <Curve />
    </motion.div>
  )
}

export default Nav
