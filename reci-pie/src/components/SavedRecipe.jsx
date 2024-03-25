import Client from '../services/api'
import { useState, useEffect } from 'react'
import axios from 'axios'
const SavedRecipe = ({ user }) => {
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    getRecipe()
  }, [])

  const getRecipe = async () => {
    const response = await Client.get(`/recipe`)
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Saved Recipes</h1>

      <h2>{}</h2>
    </div>
  )
}
export default SavedRecipe
