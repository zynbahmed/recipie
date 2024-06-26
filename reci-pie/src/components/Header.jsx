import { useState } from 'react'
import Nav from './NavBar'
import { AnimatePresence } from 'framer-motion'

const Header = ({ user, handleLogOut }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <>
      <div>
        <div
          onClick={() => {
            setIsActive(!isActive)
          }}
          className="button"
        >
          <div className={`burger ${isActive ? 'burgerActive' : ''}`}></div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && <Nav user={user} handleLogOut={handleLogOut} />}
      </AnimatePresence>
    </>
  )
}

export default Header
