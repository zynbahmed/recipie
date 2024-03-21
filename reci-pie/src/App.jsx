import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

// import { CheckSession } from "./services/Auth"

import NavBar from "./components/NavBar"

import "./App.css"

const App = () => {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <header>
        <NavBar user={user} handleLogOut={handleLogOut} />
      </header>
    </div>
  )
}

export default App
