import { useEffect, useState } from 'react'
import Client from '../services/api'
import RecipeCard from '../components/RecipeCard'
const AllRecipes = () => {
  const [allRecipes, setAllRecipes] = useState([])
  useEffect(() => {
    const getAllRecipes = async () => {
      const response = await Client.get('/recipe')
      console.log(response.data)
      setAllRecipes(response.data)
    }
    getAllRecipes()
  }, [allRecipes])

  return (
    <div>
      {/* {allRecipes.length > 0 && <RecipeCard allRecipes={allRecipes} />} */}
      <RecipeCard allRecipes={allRecipes} />
    </div>
  )
}
export default AllRecipes
