import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../services/api'
const RecipeDetails = () => {
  const navigate = useNavigate()
  let { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  useEffect(() => {
    const getRecipe = async () => {
      const response = await Client.get(`/recipe/${id}`)
      console.log(response.data)
      setRecipe(response.data)
    }
    getRecipe()
  }, [])
  const handleDelete = async (id) => {
    console.log(`/recipe/${id}`)
    await Client.delete(`/recipe/${id}`)
  }
  const handleEditPage = () => {
    navigate(`/editrecipe/${id}`)
  }

  return (
    <div>
      <h1>{recipe?.title}</h1>
      <div></div>

      <img src={recipe?.photo} alt={recipe?.title} />
      {recipe?.ingredient.map((item) => (
        <ul>
          <li>
            {item?.amount} {item?.unit} : {item?.name}
          </li>
        </ul>
      ))}
      <p>{recipe?.steps}</p>
      <p>{recipe?.description}</p>
      <button
        onClick={() => {
          handleDelete(recipe._id)
        }}
      >
        Delete Recipe
      </button>
      <br />
      <button onClick={handleEditPage}>Edit Recipe</button>
    </div>
  )
}

export default RecipeDetails
