import Client from '../services/api'
import { useState, useEffect } from 'react'
import axios from 'axios'
const SavedRecipe = ({ user }) => {
  const recipes = user?.savedRecipes
  console.log(recipes)
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Saved Recipes</h1>
      <div>
        {recipes.map((recipe) => (
          <div>
            <h1>{recipe.title}</h1>
            <img src={recipe.photo} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}
export default SavedRecipe
