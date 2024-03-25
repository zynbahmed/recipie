import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import Search from '../components/Search'
import Recipe from '../components/Recipe'
const Recipes = () => {
  const mealRef = useRef(null)
  const [search, setSearch] = useState([])
  const [rec, setRec] = useState([])
  const [click, setClick] = useState(false)
  useEffect(() => {
    const getRecipe = async () => {
      let food = await axios.get(
        `http://www.themealdb.com/api/json/v1/1/search.php?s=${search}
      `
      )
      setRec(food.data.meals)
    }
    getRecipe()
  }, [search])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const foodSearch = mealRef.current.value
    setSearch(foodSearch)
    setClick(true)
  }

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <Search onSubmit={handleSubmit} mealRef={mealRef} />
      {click ? (
        <div>
          <h1>Recipes</h1>
          <Recipe key={rec.idMeal} rec={rec} />
        </div>
      ) : (
        <h2>Please Search for Recipes</h2>
      )}
    </div>
  )
}
export default Recipes
