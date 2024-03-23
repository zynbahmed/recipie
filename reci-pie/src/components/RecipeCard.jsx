const RecipeCard = ({ allRecipes }) => {
  console.log(allRecipes, 'in recipe')
  return (
    <div>
      {allRecipes.map((recipe) => (
        <div>
          <h1>{recipe.title}</h1>
          <img src={recipe.photo} alt={recipe.title} />
        </div>
      ))}
    </div>
  )
}

export default RecipeCard
