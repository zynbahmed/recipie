import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import Client from "../services/api"

import RecipeCard from "../components/RecipeCard"
import SearchDB from "../components/SearchDB"
import RecipeDB from "../components/RecipeDB"

const AllRecipes = ({ user }) => {
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
      {user && (
        <button className="reg-btn m-2" onClick={adding}>
          Add Recipe
        </button>
      )}
      <SearchDB onSubmit={handleSubmit} dishRef={dishRef} />

      <div className="grid text-center md:grid-cols-7 lg:gap-12 m-2 mb-10">
        <div>
          <button
            onClick={() => {
              handleSelect(null)
            }}
            className="hover:font-bold"
          >
            All
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleSelect("Beef")
            }}
            className="hover:font-bold"
          >
            Beef
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleSelect("Lamb")
            }}
            className="hover:font-bold"
          >
            Lamb
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleSelect("Chicken")
            }}
            className="hover:font-bold"
          >
            Chicken
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleSelect("Sea-food")
            }}
            className="hover:font-bold"
          >
            Sea-food
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleSelect("Dessert")
            }}
            className="hover:font-bold"
          >
            Dessert
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleSelect("Breakfast")
            }}
            className="hover:font-bold"
          >
            Breakfast
          </button>
        </div>
      </div>
      {click ? (
        <div>
          <RecipeDB dishes={dishes} search={search} />
        </div>
      ) : (
        <RecipeCard allRecipes={allRecipes} />
      )}
    </div>
  )
}
export default AllRecipes
