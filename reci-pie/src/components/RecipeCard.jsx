import { Link } from 'react-router-dom'
const RecipeCard = ({ allRecipes }) => {
  console.log(allRecipes, 'in recipe')
  return (
    <div>
      {allRecipes.map((recipe) => (
        <div key={recipe._id}>
          <Link to={`/recipeDetails/${recipe._id}`}>
            <img src={recipe.photo} alt={recipe.title} />
          </Link>
          <h1>{recipe.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default RecipeCard
