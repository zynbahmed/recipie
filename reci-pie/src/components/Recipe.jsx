const Recipe = ({ rec }) => {
  console.log(rec, 'in recipe')
  return (
    <div>
      {rec.map((recipe) => (
        <div>
          <h1 className="text-3xl">{recipe.strMeal}</h1>
          <h1 className="text-2xl">Cusine: {recipe.strArea}</h1>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <p>{recipe.strInstructions}</p>
        </div>
      ))}
    </div>
  )
}

export default Recipe
