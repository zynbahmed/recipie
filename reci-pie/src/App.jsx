import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

// import { CheckSession } from "./services/Auth"

import Header from './components/Header'
import Profile from './pages/Profile'
import NavBar from './components/NavBar'
import RegistartionForm from './pages/RegisterForm'

import './styles/App.scss'

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
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <div>
        <Header user={user} handleLogOut={handleLogOut} />
      </div>
      <div>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<RegistartionForm />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
