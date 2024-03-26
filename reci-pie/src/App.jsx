import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { CheckSession } from './services/Auth'

import Header from './components/Header'
import GoogleOk from './pages/GoogleOk'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Profile from './pages/Profile'
import ShoppingList from './pages/ShoppingList'
import RegistartionForm from './pages/RegisterForm'
import AddRecipe from './pages/AddRecipe'
import AllRecipes from './pages/AllRecipes'
import RecipeDetails from './pages/RecipeDetails'
import EditRecipe from './pages/EditRecipe'
import CreatorProfile from './pages/CreatorProfile'
import './styles/App.scss'

const App = () => {
  const [user, setUser] = useState(null)
  const [list, setList] = useState([])

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
          <Route
            path="/googleok"
            element={<GoogleOk checkToken={checkToken} />}
          ></Route>
          <Route path="/profile" element={<Profile user={user} />} />
          <Route
            path="/register"
            element={<RegistartionForm setUser={setUser} />}
          />
          <Route path="/" element={<Home user={user} />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route
            path="/shopping-list"
            element={<ShoppingList list={list} setList={setList} user={user} />}
          />
          <Route path="/addrecipe" element={<AddRecipe user={user} />} />
          <Route path="/allrecipes" element={<AllRecipes />} />
          <Route
            path="/recipeDetails/:id"
            element={
              <RecipeDetails list={list} setList={setList} user={user} />
            }
          />
          <Route path="/editrecipe/:id" element={<EditRecipe />} />
          <Route path="/creatorprofile/:id" element={<CreatorProfile />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
