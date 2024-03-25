import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Client from "../services/api"
import RecipeCard from "../components/RecipeCard"
const AllRecipes = () => {
  let navigate = useNavigate()
  const [allRecipes, setAllRecipes] = useState([])
  const [cat, setCat] = useState("")
  useEffect(() => {
    const getAllRecipes = async () => {
      const response = await Client.get("/recipe/recipesbycat", {
        params: { cat: cat }
      })

      console.log(response.data)

      setAllRecipes(response.data)
    }
    getAllRecipes()
  }, [cat])

  const adding = () => {
    navigate("/addrecipe")
  }
  const handleSelect = (selected) => {
    setCat(selected)
  }

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      {/* <select onChange={handleSelect}>
        <option value="Beef">Beef</option>
        <option value="Lamb">Lamb</option>
        <option value="Sea-food">Seafood</option>
        <option value="Chicken">Chicken</option>
      </select> */}
      <button className="reg-btn m-2" onClick={adding}>
        Add Recipe
      </button>
      <div className="grid gap-6 text-center md:grid-cols-6 lg:gap-12 m-2 mb-10">
        <div>
          <button
            onClick={() => {
              handleSelect("Beef")
            }}
          >
            Beef
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleSelect("Lamb")
            }}
          >
            Lamb
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleSelect("Chicken")
            }}
          >
            Chicken
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleSelect("Sea-food")
            }}
          >
            Sea-food
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleSelect("Dessert")
            }}
          >
            Dessert
          </button>
        </div>
      </div>

      <RecipeCard allRecipes={allRecipes} />
    </div>
  )
}
export default AllRecipes
