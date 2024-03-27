import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import Client from "../services/api"
import RecipeCard from "../components/RecipeCard"
import SearchDB from "../components/SearchDB"
import RecipeDB from "../components/RecipeDB"
const AllRecipes = () => {
  let navigate = useNavigate()
  const dishRef = useRef(null)
  const [allRecipes, setAllRecipes] = useState([])
  const [cat, setCat] = useState(null)
  const [search, setSearch] = useState([])
  const [click, setClick] = useState(false)
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    const getAllRecipes = async () => {
      let endpoint = "/recipe/recipesbycat"
      let params = {}
      if (cat !== null) {
        params = { cat: cat }
      }
      const response = await Client.get(endpoint, { params: params })

      setAllRecipes(response.data)
    }
    const getSearchRecipe = async () => {
      const res = await Client.get("/recipe")
      setDishes(res.data)
    }

    getAllRecipes()
    getSearchRecipe()
    filteredRecipes()
    console.log(dishRef)
  }, [cat])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const food = dishRef.current.value
    setSearch(food)
    setClick(true)
  }
  const adding = () => {
    navigate("/addrecipe")
  }

  const handleSelect = (selected) => {
    setCat(selected)
    setClick(false)
  }

  const filteredRecipes = () => {}

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <SearchDB onSubmit={handleSubmit} dishRef={dishRef} />
      <button className="reg-btn m-2" onClick={adding}>
        Add Recipe
      </button>
      <div className="grid gap-6 text-center md:grid-cols-6 lg:gap-12 m-2 mb-10">
        <div>
          <button
            onClick={() => {
              handleSelect(null)
            }}
          >
            All
          </button>
        </div>
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
      {click ? (
        <div>
          <h1>Recipes</h1>
          <RecipeDB dishes={dishes} search={search} />
        </div>
      ) : (
        <RecipeCard allRecipes={allRecipes} />
      )}
    </div>
  )
}
export default AllRecipes
