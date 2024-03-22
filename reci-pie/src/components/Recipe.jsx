const Recipe = ({ rec }) => {
  console.log(rec, 'in recipe')
  return (
    <div>
      {rec.map((recipe) => (
        <div>
          <h1>{recipe.strMeal}</h1>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <p>{recipe.strInstructions}</p>
        </div>
      ))}
    </div>
  )
}

export default Recipe
