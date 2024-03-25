import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Client from "../services/api"
import RecipeCard from "../components/RecipeCard"
const AllRecipes = () => {
  let navigate = useNavigate()
  const [allRecipes, setAllRecipes] = useState([])
  useEffect(() => {
    const getAllRecipes = async () => {
      const response = await Client.get("/recipe")
      console.log(response.data)
      setAllRecipes(response.data)
    }
    getAllRecipes()
  }, [])

  const adding = () =>{
    navigate('/addrecipe')
  }

  return (
    <div>
        {/* {allRecipes.length > 0 && <RecipeCard allRecipes={allRecipes} />} */}
        <button className="reg-btn m-2" onClick={adding}>Add Recipe</button>
        <RecipeCard allRecipes={allRecipes} />
    </div>
  )
}
export default AllRecipes
