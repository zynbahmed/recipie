import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'
import RecipeCard from '../components/RecipeCard'
const AllRecipes = () => {
  let navigate = useNavigate()
  const [allRecipes, setAllRecipes] = useState([])
  const [cat, setCat] = useState('')
  useEffect(() => {
    const getAllRecipes = async () => {
      const response = await Client.get('/recipe/recipesbycat', {
        params: { cat: cat }
      })

      console.log(response.data)

      setAllRecipes(response.data)
    }
    getAllRecipes()
  }, [cat])

  const adding = () => {
    navigate('/addrecipe')
  }
  const handleSelect = (selected) => {
    setCat(selected)
  }

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <button
        onClick={() => {
          handleSelect('Beef')
        }}
      >
        <div>Beef</div>
      </button>
      <button
        onClick={() => {
          handleSelect('Lamb')
        }}
      >
        <div>Lamb</div>
      </button>
      <button
        onClick={() => {
          handleSelect('Chicken')
        }}
      >
        <div>Chicken</div>
      </button>
      <button
        onClick={() => {
          handleSelect('Sea-food')
        }}
      >
        <div>Sea-food</div>
      </button>
      <button
        onClick={() => {
          handleSelect('Dessert')
        }}
      >
        <div>Dessert</div>
      </button>

      <button className="reg-btn m-2" onClick={adding}>
        Add Recipe
      </button>
      <RecipeCard allRecipes={allRecipes} />
    </div>
  )
}
export default AllRecipes
