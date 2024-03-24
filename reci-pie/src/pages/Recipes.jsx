import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import Search from '../components/Search'
import Recipe from '../components/Recipe'
const Recipes = () => {
  const mealRef = useRef(null)
  const [search, setSearch] = useState([])
  const [rec, setRec] = useState([])
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
  }

  return (
    <div>
      <h1>Recipes</h1>
      <Search onSubmit={handleSubmit} mealRef={mealRef} />
      <Recipe key={rec.idMeal} rec={rec} />
      {console.log(rec)}
    </div>
  )
}
export default Recipes
